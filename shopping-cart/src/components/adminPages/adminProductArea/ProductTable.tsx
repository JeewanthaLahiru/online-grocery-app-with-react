import React, {useEffect, useState} from "react";
import {Col, Image, Form, Button, Modal, Toast} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { products } from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import paginationFactory from "react-bootstrap-table2-paginator";
import {useHistory} from 'react-router-dom';
import {useMutation, useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../../graphql/queries/Product";
import ProductImage from "./ProductImage";
import {DELETE_PRODUCT_MUTATION} from "../../../graphql/mutations/Product";
import ConfirmationMessage from "../../homePage/SupportiveComponents/ConfirmationMessage";
import {useDispatch} from "react-redux";
import {loading_end, loading_start} from "../../../store/actions/LoadingActions";

type ProductTableProps = {
    category: string
}

const ProductTable:React.FC<ProductTableProps> = (props) => {

    const dispatch = useDispatch();

    const {loading, error, data, refetch} = useQuery(GET_PRODUCTS);
    const [productsFromServer, setProductsFromServer] = useState([]);
    const [deleteConfirmed, setDeleteConfirmed] = useState("");
    const [showAfterDeleteConfirmed, setShowAfterDeleteConfirmed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [delProdId, setDelProdId] = useState<string>("");
    const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);

    loading? dispatch(loading_start(true)): dispatch(loading_end(false));


    useEffect(() => {
        console.log("delete confirmed");
        refetch();

    }, [deleteConfirmed]);

    /*useEffect(() => {
        if(data){
            setProductsFromServer(data.getproducts);
        }
    }, [data]);*/


    const history = useHistory();

    const productToRender:any = [];
    const renderProducts = () => {
        if(props.category == "All"){
            productsFromServer.map((productItem, index) => {
                productToRender.push({key: index , value: productItem});
            })
        }else{
            productsFromServer.map((productItem:any, index) => {
                if(productItem.category == props.category){
                    productToRender.push({key: index , value: productItem});
                }
            })
        }
    }
    renderProducts();
    const handleOnCloseModal = () => {
        setShowModal(false);
    }
    if(loading){
        return (
            <React.Fragment>Loading...</React.Fragment>
        )
    }
    if(error){
        return (
            <React.Fragment>Error...</React.Fragment>
        )
    }
    //setProductsFromServer(data.getproducts);
    const newdatafromserver = data.getproducts;
    console.log(newdatafromserver);

    const columns = [
        {
            dataField: "id",
            text:"#",
            sort: true
        },
        {
            dataField: "item",
            text:"Item",
            sort: true
        },
        {
            dataField: "name",
            text: "Name",
            sort: true
        },
        {
            dataField: "description",
            text: "Description",
            sort: true
        },
        {
            dataField: "prevprice",
            text: "Prev. Price",
            sort: true
        },
        {
            dataField: "price",
            text: "Price",
            sort: true
        },
        {
            dataField: "edit",
            text: ""
        },
        {
            dataField: "delete",
            text: ""
        }
        ];
    const customTotal = (from:number, to:number, size:number) => (
        <span className="react-bootstrap-table-pagination-total per-page pl-2 pl-md-3">
            Showing { from } to { to } of { size } Results
        </span>
    );

    const options = {
        paginationSize: 5,
        pageStartIndex: 1,
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '5', value: 5
        }, {
            text: '10', value: 10
        },{
            text: '50', value: 50
        },{
            text: 'All', value: 1000
        }]
    };

    const HandleOnEdit = (id:number) => {
        history.push(`/admin/product/addproduct/${id}`);
    }

    const HandleOnDelete = (id: string) => {
        setShowModal(true);
        setDelProdId(id);
    }
    const ConfirmDelete = () => {
        setShowModal(false);
        deleteProduct({variables: {
            input: {
                id: delProdId
            }
            }}).then(()=> {
                setDeleteConfirmed(delProdId);
                console.log("product was deleted successfully");
                setShowAfterDeleteConfirmed(true);
        }).catch(err => {
            console.log(err);
        })
    }
    const closeConfirmDeleteModal = () => {
        setShowAfterDeleteConfirmed(false);
    }

    const productGenerator = (products:IProduct[]): any[] => {
        const checkList : any[] = [];

        newdatafromserver.map((product:any, i: number) => {
            checkList.push({
                id:
                    <Form.Label>{i+1}</Form.Label>,
                item:
                    <div className="image-container">
                        <ProductImage imageName={product.image} data={data}/>
                    </div>,
                name:
                    <Form.Label className="text-left">{product.name}</Form.Label>,
                description:
                    <Form.Label className="text-left" >{product.description}</Form.Label>,
                prevprice:
                    <Form.Label>{product.previousPrice }</Form.Label>,
                price:
                    <Form.Label>{product.price}</Form.Label>,
                edit:
                    <React.Fragment>
                        <i
                            className="feather icon-edit-2 product-icon"
                            onClick={() => HandleOnEdit(product.id)}
                        />
                    </React.Fragment>,
                delete:
                    <React.Fragment>
                        <i
                            className="feather icon-trash product-icon"
                            onClick={() => HandleOnDelete(product.id)}
                        />
                    </React.Fragment>,
            })
        })

        return checkList;
    }


    return(
        <React.Fragment>
            <Col xs={12}>
                <BootstrapTable
                    bootstrap4
                    keyField={"id"}
                    data={productGenerator(products)}
                    columns={columns}
                    bordered={false}
                    pagination={paginationFactory(options)}
                    wrapperClasses="table-responsive"
                    rowClasses="text-nowrap"
                />
            </Col>
            <Modal show={showModal} onHide={handleOnCloseModal}>
                <Modal.Header closeButton className="bg-danger text-white" >
                    <Modal.Title> <i className="feather icon-alert-triangle text-white" /> Confirm delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure want to delete this product?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={ConfirmDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleOnCloseModal}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
            <ConfirmationMessage
                message={"Product was deleted successfully"}
                showAfterDeleteConfirmed={showAfterDeleteConfirmed}
                setShowAfterDeleteConfirmed={closeConfirmDeleteModal}
            />
        </React.Fragment>
    )
}

export default ProductTable;
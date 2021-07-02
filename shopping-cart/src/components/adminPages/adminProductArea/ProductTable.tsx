import React, {useEffect, useState} from "react";
import {Col, Image, Form, Button, Modal} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { products } from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import paginationFactory from "react-bootstrap-table2-paginator";
import {useHistory} from 'react-router-dom';
import {useMutation, useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../../graphql/queries/Product";
import axios from "axios";
import ProductImage from "./ProductImage";
import {DELETE_PRODUCT_MUTATION} from "../../../graphql/mutations/Product";
import LoadingScreen from "../../homePage/LoadingScreen";
import ConfirmationMessage from "../../homePage/ConfirmationMessage";

type ProductTableProps = {
    category: string
}

const ProductTable:React.FC<ProductTableProps> = (props) => {

    const {loading, error, data, refetch} = useQuery(GET_PRODUCTS);
    const [productsFromServer, setProductsFromServer] = useState([]);
    const [deleteConfirmed, setDeleteConfirmed] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [delProdId, setDelProdId] = useState<string>("");
    const [deleteProduct] = useMutation(DELETE_PRODUCT_MUTATION);


    useEffect(() => {
        console.log("delete confirmed");
        refetch();

    }, [deleteConfirmed]);

    useEffect(() => {
        if(data){
            setProductsFromServer(data.getproducts);
        }
    }, [data]);


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
        }).catch(err => {
            console.log(err);
        })
    }

    const productGenerator = (products:IProduct[]): any[] => {
        const checkList : any[] = [];

        productToRender.map((product:any, i: number) => {
            checkList.push({
                id:
                    <Form.Label>{i+1}</Form.Label>,
                item:
                    <div className="image-container">
                        <ProductImage imageName={product.value.image} data={data}/>
                    </div>,
                name:
                    <Form.Label className="text-left">{product.value.name}</Form.Label>,
                description:
                    <Form.Label className="text-left" >{product.value.description}</Form.Label>,
                prevprice:
                    <Form.Label>{product.value.previousPrice }</Form.Label>,
                price:
                    <Form.Label>{product.value.price}</Form.Label>,
                edit:
                    <React.Fragment>
                        <i
                            className="feather icon-edit-2 product-icon"
                            onClick={() => HandleOnEdit(product.value.id)}
                        />
                    </React.Fragment>,
                delete:
                    <React.Fragment>
                        <i
                            className="feather icon-trash product-icon"
                            onClick={() => HandleOnDelete(product.value.id)}
                        />
                    </React.Fragment>,
            })
        })

        return checkList;
    }


    return(
        <React.Fragment>
            {loading && <LoadingScreen/>}
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
        </React.Fragment>
    )
}

export default ProductTable;
import React, {useEffect, useState} from "react";
import {Col, Image, Form} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { products } from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import paginationFactory from "react-bootstrap-table2-paginator";
import {useHistory} from 'react-router-dom';
import {useQuery} from "@apollo/client";
import {GET_PRODUCTS} from "../../../graphql/queries/Product";
import axios from "axios";
import ProductImage from "./ProductImage";

type ProductTableProps = {
    category: string
}

const ProductTable:React.FC<ProductTableProps> = (props) => {

    const {loading, error, data, refetch} = useQuery(GET_PRODUCTS);
    const [productsFromServer, setProductsFromServer] = useState([]);

    useEffect(() => {
        refetch();

    }, []);

    useEffect(() => {
        if(data){
            setProductsFromServer(data.getproducts);
        }
    }, [data]);


    const history = useHistory();

    const productToRender:any = [];
    if(props.category == "All"){

        productsFromServer.map((productItem, index) => {
            productToRender.push(productItem);
        })
    }else{
        productsFromServer.map((productItem: any,index)=>{
            if(productItem.category === props.category){
                productToRender.push({key:index, value: productItem});
            }
        })
    }

    const renderImage = async (image: string) => {
        console.log(image + " : " + image.split(/[.]/)[1]);
        const generateGetUrl = 'http://localhost:4000/generate-get-url';
        const getOptions = {
            params: {
                Key: image,
                ContentType: image.split(/[.]/)[1]
            }
        };

        axios
            .get(generateGetUrl, getOptions)
            .then(res => {
                console.log("getUrl :" + res.data);
                return <Image src={res.data} />
            })
            .catch(err => {
                console.log("error in generateGet Url : \n"+ err);
            })
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

    const HandleOnDelete = (id: number) => {
        console.log("hello delete" + id);
    }

    const productGenerator = (products:IProduct[]): any[] => {
        const checkList : any[] = [];

        productToRender.map((product:any, i: number) => {
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
                    <Form.Label>{product.price }</Form.Label>,
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
        </React.Fragment>
    )
}

export default ProductTable;
import React from "react";
import {Col, Image, Form} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { products } from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import paginationFactory from "react-bootstrap-table2-paginator";

type ProductTableProps = {
    category: string
}

const ProductTable:React.FC<ProductTableProps> = (props) => {

    const productToRender:IProduct[] = [];
    if(props.category == "All"){
        products.map((productItem) => {
            productToRender.push(productItem);
        })
    }else{
        products.map((productItem)=>{
            if(productItem.category === props.category){
                productToRender.push(productItem);
            }
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
        console.log("hello world" + id);
    }

    const HandleOnDelete = (id: number) => {
        console.log("hello delete" + id);
    }

    const productGenerator = (products:IProduct[]): any[] => {
        const checkList : any[] = [];

        productToRender.map((product, i: number) => {
            checkList.push({
                id:
                    <Form.Label>{i+1}</Form.Label>,
                item:
                    <div className="image-container">
                        <Image src={product.image} />
                    </div>,
                name:
                    <Form.Label className="text-left">{product.name}</Form.Label>,
                description:
                    <Form.Label className="text-left" >{product.category}</Form.Label>,
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
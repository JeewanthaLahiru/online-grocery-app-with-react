import React from "react";
import {Button, Col} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { products } from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import paginationFactory from "react-bootstrap-table2-paginator";

const ProductTable:React.FC = () => {

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
            text: "Descritption",
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

    const productGenerator = (products:IProduct[]): any[] => {
        const checkList : any[] = [];

        products.map((product, i: number) => {
            checkList.push({
                id: i+1,
                item: product.category,
                name: product.name,
                description: product.name,
                prevprice: product.price,
                price: product.price,
                edit:
                    <React.Fragment>
                        <Button variant={"secondary"}><i className="feather icon-edit" ></i></Button>
                    </React.Fragment>,
                delete:
                    <React.Fragment>
                        <Button variant={"danger"}><i className="feather icon-delete" ></i></Button>
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
                />
            </Col>
        </React.Fragment>
    )
}

export default ProductTable;
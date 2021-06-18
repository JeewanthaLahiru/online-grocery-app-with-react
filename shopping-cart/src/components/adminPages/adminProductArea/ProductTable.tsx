import React from "react";
import {Button, Col} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { products } from "../../../repository/Products";
import {IProduct} from "../../../types/Products";

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
                    keyField={"id"}
                    data={productGenerator(products)}
                    columns={columns}
                    bordered={false}
                />
            </Col>
        </React.Fragment>
    )
}

export default ProductTable;
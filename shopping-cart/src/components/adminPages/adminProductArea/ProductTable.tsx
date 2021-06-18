import React from "react";
import {Col} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";

const ProductTable:React.FC = () => {

    const columns = [{
        dataField: 'id',
        text: 'Product ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Product Name',
        sort: true
    }, {
        dataField: 'price',
        text: 'Product Price',
        sort: true
    }];

    const sampleData = [
        {
            id:"sampleid001",
            name: "samplename001",
            price: "sampleprice001",
            prevP: "sapmleprevprice001"
        },
        {
            id:"sampleid002",
            name: "samplename002",
            price: "sampleprice002",
            prevP: "samplePrevprice002"
        }
    ]

    return(
        <React.Fragment>
            <Col xs={12}>
                <BootstrapTable
                    keyField="id"
                    data={sampleData}
                    columns={columns}/>
            </Col>
        </React.Fragment>
    )
}

export default ProductTable;
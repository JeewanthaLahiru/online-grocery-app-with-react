import React from "react";
import {Col} from "react-bootstrap";
import {EOrderStatus, IOrder} from "../../../types/Orders";
import {orders} from "../../../repository/Orders";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

type OrdersTableProps = {
    isPending: boolean
}
const OrdersTable:React.FC<OrdersTableProps> = (props) => {

    const orderData:IOrder[] = [];
    if(props.isPending){
        orders.map((orderitem) => {
            if(orderitem.orderStatus === EOrderStatus.PENDING){
                orderData.push(orderitem);
            }
        })
    }else{
        orders.map((orderitem) => {
            if(orderitem.orderStatus !== EOrderStatus.PENDING){
                orderData.push(orderitem);
            }
        })
    }
    const columns = [
        {
            dataField : "id",
            text : "id",
            sort : true
        },
        {
            dataField: "invoiceNumber",
            text: "Invoice No",
            sort: true
        },
        {
            dataField: "area",
            text: "Area"
        },
        {
            dataField: "value",
            text: "Value"
        },
        {
            dataField: "actions",
            text: "Actions"
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

    const orderGenerator = (orders:IOrder[]) => {
        const generatedOrderList:any[] = [];

        orders.map((orderItem:IOrder, index:number) => {
            generatedOrderList.push({
                id : index+1,
                invoiceNumber : orderItem.orderId,
                area : orderItem.deliveryDetails.city,
                value : orderItem.subTotal,
                actions :
                    <React.Fragment>
                        <i
                            className="feather icon-edit-2"
                            onClick={() =>  handleOnEditClick(orderItem.orderId)}
                        ></i>
                    </React.Fragment>
            })
        })

        return generatedOrderList;
    }

    const handleOnEditClick = (id:string) => {
        console.log(id);
    }

    return(
        <React.Fragment>
            <Col xs={12}>
                <BootstrapTable
                    bootstrap4
                    keyField={"id"}
                    data={orderGenerator(orderData)}
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

export default OrdersTable;
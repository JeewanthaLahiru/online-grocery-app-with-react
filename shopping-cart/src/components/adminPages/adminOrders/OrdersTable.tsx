import React, {useState} from "react";
import {Col} from "react-bootstrap";
import {EOrderStatus, IOrder} from "../../../types/Orders";
import {orders} from "../../../repository/Orders";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {useHistory} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_ORDERS_FOR_TABLE} from "../../../graphql/queries/Order";
import {useDispatch} from "react-redux";
import {loading_start} from "../../../store/actions/LoadingActions";

type OrdersTableProps = {
    isPending: boolean
}
const OrdersTable:React.FC<OrdersTableProps> = (props) => {
    const dispatch = useDispatch();
    const {loading, data, refetch, error} = useQuery(GET_ORDERS_FOR_TABLE);
    //const [ordersFromServer, setOrdersFromServer] = useState<any>();
    const orderList:any[] = [];
    if(loading){
        dispatch(loading_start(true));
    }else{
        dispatch(loading_start(false));
        data.getOrders.map((order:any)=> {
            orderList.push(order);
        })
    }
    console.log(orderList);
    const history = useHistory();
    const orderData:any[] = [];
    if(props.isPending){
        orderList.map((orderitem) => {
            if(orderitem.orderStatus === EOrderStatus.PENDING){
                orderData.push(orderitem);
            }
        })
    }else{
        orderList.map((orderitem) => {
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

        orders.map((orderItem:any, index:number) => {
            generatedOrderList.push({
                id : index+1,
                invoiceNumber : orderItem.id,
                area :
                    <React.Fragment>
                        {orderItem.shippingDetails.city + "," + orderItem.shippingDetails.postalCode}
                        {/*{orderItem.deliveryDetails.city + "," + orderItem.deliveryDetails.postalCode}*/}
                    </React.Fragment>,
                value : orderItem.subTotal,
                actions :
                    <React.Fragment>
                        <i
                            className="feather icon-edit-2"
                            onClick={() =>  handleOnEditClick(orderItem.id)}
                        />
                    </React.Fragment>
            })
        })

        return generatedOrderList;
    }

    const handleOnEditClick = (id:string) => {
        history.push(`/admin/orders/${id}`);
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
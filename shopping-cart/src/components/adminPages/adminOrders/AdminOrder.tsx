import React from "react";
import {useParams} from "react-router-dom";
import {orders} from "../../../repository/Orders";

interface ParamTypes{
    orderid:string
}

const AdminOrder:React.FC = () => {
    const {orderid} = useParams<ParamTypes>();

    const SelectedOrder:any = orders.find(({orderId}) => orderId == orderid);

    return(
        <React.Fragment>
            {SelectedOrder.orderStatus}
        </React.Fragment>
    )
}

export default AdminOrder;
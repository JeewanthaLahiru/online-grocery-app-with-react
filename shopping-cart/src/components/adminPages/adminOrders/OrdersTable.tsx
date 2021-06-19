import React from "react";

type OrdersTableProps = {
    isPending: boolean
}
const OrdersTable:React.FC<OrdersTableProps> = (props) => {
    return(
        <React.Fragment>
            Pending orders
            {props.isPending? "pending orders" : "Accepted orders"}
        </React.Fragment>
    )
}

export default OrdersTable;
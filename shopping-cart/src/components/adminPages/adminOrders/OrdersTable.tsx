import React from "react";
import {Col} from "react-bootstrap";

type OrdersTableProps = {
    isPending: boolean
}
const OrdersTable:React.FC<OrdersTableProps> = (props) => {
    return(
        <React.Fragment>
            <Col xs={12}>
                {props.isPending && "hello"}
            </Col>
        </React.Fragment>
    )
}

export default OrdersTable;
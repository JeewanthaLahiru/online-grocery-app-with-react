import React, {useState} from "react";
import {Col, Form, Image, Row} from "react-bootstrap";
import CoverImg from "../../../assets/images/banner_images/banner.jpg";
import OrdersTable from "./OrdersTable";

const AdminOrderArea:React.FC = () => {

    const[isPending, setIsPending] = useState(true);
    const handleOnPendingClick = () => {
        setIsPending(true);
        console.log(isPending);
    }
    const handleOnAcceptClick = () => {
        setIsPending(false);
    }

    return(
        <React.Fragment>
            <Row className="mx-0 admin-order-row justify-content-center my-3">
                <Col xs={12} md={10} xl={8} className="admin-order-body" >
                    <Row className="mx-0 nav-area">
                        <Col xs={12} >
                            <ul>
                                <li>
                                    <Form.Label
                                        className={isPending?"text-bold":""}
                                        onClick={handleOnPendingClick}
                                    >
                                        Pending orders
                                    </Form.Label>
                                </li>
                                <li>
                                    <Form.Label
                                        className={!isPending?"text-bold":""}
                                        onClick={handleOnAcceptClick}
                                    >
                                        Accepted orders
                                    </Form.Label>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row className="mx-0 header-area ">
                        <Col xs={12}>
                            <Image src={CoverImg} />
                        </Col>
                    </Row>
                    <Row className="mx-0 order-table-area">
                        <OrdersTable isPending={isPending}/>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminOrderArea;
import React from "react";
import Profile from "../../../assets/images/default/default.jpg";
import {Col, Row, Image} from "react-bootstrap";

const AdminProfile:React.FC = () => {
    return(
        <React.Fragment>
            <Row className="mx-0 profile-page" >
                <Col xs={4} className="profile-left">
                    <Row className="mx-0 mt-5 profile-image justify-content-center">
                        <Col xs={9}>
                            <Image src={Profile} />
                        </Col>
                    </Row>
                </Col>
                <Col xs={8} className="profile-right">

                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminProfile;
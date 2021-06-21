import React from "react";
import Profile from "../../../assets/images/default/default.jpg";
import {Col, Row, Image, Form, Button} from "react-bootstrap";
import {UserTypes} from "../../../types/admin/UserTypes";

const AdminProfile:React.FC = () => {

    const defaultUser:UserTypes = {
        name: "Jeewantha Lahiru",
        status: "new gomez bar owner",
        email: "jeewanthalahiru1111@gmail.com",
        phone: "+94 71 123 4566",
        rating: 6.7,
        description: "We have every kind of liquors. delivery is available",
        image: Profile
    }

    return(
        <React.Fragment>
            <Row className="mx-0 profile-page" >
                <Col xs={4} className="profile-left">
                    <Row className="mx-0 mt-5 profile-image justify-content-center">
                        <Col xs={9}>
                            <Image src={defaultUser.image} />
                        </Col>
                        <Col xs={5} className="mx-0 mt-5">
                            <span className="float-left text-left">{defaultUser.description}<br/></span>
                            <span className="float-left text-left mt-4" >Phone: <br/>{defaultUser.phone}</span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={8} className="profile-right">
                    <Row className="mx-0" >
                        <Col xs={12}>
                            <h1 className="text-left" >{defaultUser.name}</h1>
                            <h5 className={"text-left"} >{defaultUser.status}</h5>
                            <h4 className="text-left" >
                                {defaultUser.rating}&nbsp;&nbsp;&nbsp;
                                <span className={Number(defaultUser.rating)>=0.0 ? "text-warning" : "text-divider"} >
                                    <i className={"feather icon-star"}/>
                                </span>
                                <span className={Number(defaultUser.rating)>=2.0 ? "text-warning" : "text-divider"} >
                                    <i className={"feather icon-star"}/>
                                </span>
                                <span className={Number(defaultUser.rating)>=4.0 ? "text-warning" : "text-divider"} >
                                    <i className={"feather icon-star"}/>
                                </span>
                                <span className={Number(defaultUser.rating)>=6.0 ? "text-warning" : "text-divider"} >
                                    <i className={"feather icon-star"}/>
                                </span>
                                <span className={Number(defaultUser.rating)>=8.0 ? "text-warning" : "text-divider"} >
                                    <i className={"feather icon-star"}/>
                                </span>
                            </h4>
                        </Col>
                        <Col xs={12} className="mt-4" >
                            <Button variant="info" className="px-3 mr-2 float-left">Send message</Button>
                            <Button variant="info" className="px-3 mr-2 float-left">Contact Us</Button>
                            <Button variant="info" className="px-3 float-left">Report User</Button><br/>
                            <hr className="mt-4" />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminProfile;
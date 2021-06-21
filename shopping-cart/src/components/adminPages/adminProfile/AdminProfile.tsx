import React from "react";
import Profile from "../../../assets/images/default/default.jpg";
import {Col, Row, Image, Form, Button} from "react-bootstrap";
import {UserTypes} from "../../../types/admin/UserTypes";
import {products} from "../../../repository/Products";
import {IProduct} from "../../../types/Products";
import Product from "../../homePage/productArea/Product";

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

    const renderProducts = () => {
        return(
            products.slice(0,5).map((product:IProduct, index:number) => {
                return(
                    <Product index={index} product={product}/>
                )
            })
        )
    }

    return(
        <React.Fragment>
            <Row className="mx-0 profile-page" >

                <Col xs={12} className="profile-right">
                    <Row className="mx-0 py-5" >
                        <Col xs={12} lg={4} className="profile-left">
                            <Row className="mx-0 profile-image justify-content-center">
                                <Col xs={9}>
                                    <Image src={defaultUser.image} />
                                </Col>

                            </Row>
                        </Col>
                        <Col xs={12} lg={8}>
                            <h1 className="text-lg-left" >{defaultUser.name}</h1>
                            <h5 className={"text-lg-left"} >{defaultUser.status}</h5>
                            <h4 className="text-lg-left" >
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
                            <Row className="mx-0">
                                <Col xs={12} className="p-0 mt-3">
                                    <span className="text-lg-left float-lg-left">
                                        {defaultUser.description}
                                    </span>
                                    <br/>
                                    <span className="text-lg-left float-lg-left">
                                        Phone: &nbsp;
                                        {defaultUser.phone}
                                    </span>
                                </Col>
                                <Col xs={12} className="mt-4 p-0" >
                                    <Button variant="info" className="px-3 mr-2 float-lg-left">Send message</Button>
                                    <Button variant="info" className="px-3 mr-2 float-lg-left">Contact Us</Button>
                                    <Button variant="info" className="px-3 float-lg-left">Report User</Button><br/>
                                </Col>

                            </Row>
                        </Col>

                    </Row>

                    <hr className="mt-4" />
                    <Row className="mx-0 product-list-profile">
                        {renderProducts()}
                    </Row>
                </Col>
            </Row>
        </React.Fragment>
    )
}

export default AdminProfile;
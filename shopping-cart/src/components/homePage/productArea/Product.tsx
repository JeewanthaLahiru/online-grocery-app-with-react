import React from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import Coconut from "../../../assets/images/products/coconut.jpg";
import {IProduct} from "../../../types/Products";

type ProductTypeProps = {
    index: number,
    product: IProduct
}

const Product:React.FC<ProductTypeProps> = (props) => {
    return(
        <Col xs={3} className="px-4 py-2">
            <Row className="product-class" >
                <Col xs={12} className="image-container pt-3" >
                    <Image src={props.product.image} alt={"coconut"} />
                </Col>
                <Col xs={12} >
                    <h5 className="text-center mb-5" >{props.product.name}</h5>
                </Col>
                <Col xs={6} >
                    <p className="text-center discount" >{props.product.price}.00</p>
                </Col>
                <Col xs={6} >
                    <p className="text-center price text-success" >Rs.{props.product.price}.<span className="small-text">00</span></p>
                </Col>

                <Col xs={5} className="cart-quantity" >
                    <Form>
                        <Form.Group>
                            <Form.Control type="number" value={1} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col xs={7} className="add-to-cart" >
                    <Button variant="success">Add To Cart</Button>
                </Col>

            </Row>
        </Col>
    )
}

export default Product;
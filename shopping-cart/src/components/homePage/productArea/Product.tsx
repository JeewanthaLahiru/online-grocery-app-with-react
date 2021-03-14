import React, {useEffect} from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import {IProduct} from "../../../types/Products";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ICartProduct} from "../../../types/CartProducts";
import {AppState} from "../../../store/reducers";
import {
    addProductToCart,
    deleteProductFromCart,
    updateProductFromCart
} from "../../../store/actions/CartProductActions";
type ProductTypeProps = {
    index: number,
    product: IProduct
}
type FormData = {
    productQty: string;
};

const Product:React.FC<ProductTypeProps> = (props) => {

    const dispatch = useDispatch();
    const product_image = props.product.image;
    const product_name = props.product.name;
    const product_price = props.product.price;
    const {handleSubmit, control, setValue} = useForm<FormData>();
    useEffect(() => {
        if (!getRelevantCartProductQty()) {
            setValue("productQty", "1");
            return;
        }
        setValue("productQty", getRelevantCartProductQty());
    });

    const cartProducts: ICartProduct[] = useSelector((state:AppState)=>state.cartProduct.cartProducts);

    const getRelevantCartProductId = ():number  => {
        let relevantCartProductId: number = 0;
        cartProducts.forEach((cartProduct) => {
            if(cartProduct.product.id === props.product.id)
                relevantCartProductId = cartProduct.product.id;
        })
        return relevantCartProductId
    }
    const getRelevantCartProductQty = ():number  => {
        let relevantCartProductId: number = 0;
        cartProducts.forEach((cartProduct) => {
            if(cartProduct.product.id === props.product.id)
                relevantCartProductId = cartProduct.qty;
        })
        return relevantCartProductId
    }

    const handleOnAddProductToCart = (data:FormData) => {
        if(data.productQty === '0' && !getRelevantCartProductQty()){
            setValue('productQty', '1')
            return;
        }

        if(!getRelevantCartProductQty()){
            const newCartProduct: ICartProduct = {
                id: props.product.id,
                product: props.product,
                qty: +data.productQty
            }
            dispatch(addProductToCart(newCartProduct));
        }
        else if(getRelevantCartProductQty() && data.productQty === '0'){
            dispatch(deleteProductFromCart(getRelevantCartProductId()))
        }
        else{
            dispatch(updateProductFromCart(props.product.id, +data.productQty))
        }
    }

    return(
        <Col xs={6} md={4} lg={3} className="px-4 py-2">
            <Row className="product-class" >
                <Col xs={12} className="image-container pt-3" >
                    <Image src={product_image} alt={"coconut"} />
                </Col>
                <Col xs={12} >
                    <h5 className="text-center mb-5 product-name" >{product_name}</h5>
                </Col>
                <Col xs={6} >
                    <p className="text-center discount" >{product_price}.00</p>
                </Col>
                <Col xs={6} >
                    <p className="text-center price text-success" >Rs.{props.product.price}.<span className="small-text">00</span></p>
                </Col>

                <Form onSubmit={handleSubmit(handleOnAddProductToCart)}>
                    <Col xs={12}>
                        <Row>
                            <Col xs={5} className="cart-quantity m-0" >

                                <Form.Group>
                                    <Controller as={<Form.Control className={'quantity-form'} type="number" placeholder="1" min={0}/>}
                                                name={'productQty'}
                                                defaultValue='1'
                                                control={control}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={7} className="add-to-cart m-0" >
                                {!getRelevantCartProductId() && <Button variant="success" type="submit">Add To Cart</Button> }
                                {!!getRelevantCartProductId() && <Button variant="outline-primary" type="submit">Update</Button> }
                            </Col>
                        </Row>
                    </Col>

                </Form>


            </Row>
        </Col>
    )
}

export default Product;
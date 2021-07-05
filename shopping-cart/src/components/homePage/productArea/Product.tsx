import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import {IProduct} from "../../../types/Products";
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {ICartProduct} from "../../../types/CartProducts";
import {AppState} from "../../../store/reducers";
import DefaultImg from "../../../assets/images/default/default.jpg";
import {
    addProductToCart,
    deleteProductFromCart,
    updateProductFromCart
} from "../../../store/actions/CartProductActions";
import axios from "axios";
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
    const [imageUrl , setImageUrl] = useState();
    const generateGetUrl = 'http://ec2-54-174-33-34.compute-1.amazonaws.com:4000/generate-get-url';

    const getOptions = {
        params: {
            Key: product_image,
            ContentType: product_image.split(/[.]/)[1]
        }
    };
    useEffect(()=> {
        axios
            .get(generateGetUrl, getOptions)
            .then(res => {
                setImageUrl(res.data);
            })
            .catch(err => {
                console.log("error in generateGet Url : \n"+ err);
            })
    },[product_image])



    /*useEffect(() => {
        if (!getRelevantCartProductQty()) {
            setValue("productQty", "1");
            return;
        }
        setValue("productQty", getRelevantCartProductQty());
    });*/

    const cartProducts: ICartProduct[] = useSelector((state:AppState)=>state.cartProduct.cartProducts);

    const getRelevantCartProductId = ():number  => {
        let relevantCartProductId: number = 0;
        cartProducts.forEach((cartProduct) => {
            if(cartProduct.product.id === props.product.id)
                relevantCartProductId = cartProduct.product.id;
        })
        return relevantCartProductId
    }
    const getRelevantCartProductQty = ():string  => {
        let relevantCartProductQty: number = 0;
        cartProducts.forEach((cartProduct) => {
            if(cartProduct.product.id === props.product.id)
                relevantCartProductQty = cartProduct.qty;
        })
        return relevantCartProductQty.toString()
    }
    useEffect(() => {
        if(Number(getRelevantCartProductQty()) > 0){
            setValue("productQty", getRelevantCartProductQty());
        }
    })

    const handleOnAddProductToCart = (data:FormData) => {
        if(data.productQty === '0' && !getRelevantCartProductQty()){
            setValue('productQty', '1')
            return;
        }

        console.log(data)
        if(getRelevantCartProductQty() === '0'){
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
                    <Image src={imageUrl? imageUrl : DefaultImg} alt={"coconut"} />
                </Col>
                <Col xs={12} >
                    <h5 className="text-center mb-5 product-name" >{product_name}</h5>
                </Col>
                <Col xs={4}>
                    <p className="text-center discount m-0" >{product_price}</p>
                </Col>
                <Col xs={8} >
                    <p className="text-center price text-success" >Rs.{props.product.price}<span className="small-text"></span></p>
                </Col>

                <Form onSubmit={handleSubmit(handleOnAddProductToCart)}>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12} md={5} className="cart-quantity m-0" >

                                <Form.Group>
                                    <Controller
                                        render={({field})=>
                                            (
                                                <Form.Control
                                                    className={'quantity-form'}
                                                    type="number"
                                                    {...field}
                                                    min={1}
                                                />
                                            )}
                                        defaultValue={"1"}
                                        name={'productQty'}
                                        control={control}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={7} className="add-to-cart mx-0 mb-2 pl-xs-1 pl-md-0" >
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
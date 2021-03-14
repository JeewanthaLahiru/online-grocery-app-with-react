import {CartProductState} from "../../types/CartProducts";
import {CartProductActionTypes} from "../types/cartActionTypes";
import {
    ADD_PRODUCT_TO_CART, DECREMENT_PRODUCT_QTY,
    DELETE_PRODUCT_FROM_CART,
    INCREMENT_PRODUCT_QTY,
    UPDATE_PRODUCT_FROM_CART
} from "../constants/cartVariables";

export const initialState: CartProductState = {
    cartProducts: [],
    isDiscounted: false
}

export const cartProductReducer = (
    state:CartProductState= initialState,action:
    CartProductActionTypes):CartProductState => {

    switch (action.type){
        case ADD_PRODUCT_TO_CART:{
            return {
                ...state,
                cartProducts:[...state.cartProducts, action.payload]
            }
        }
        case DELETE_PRODUCT_FROM_CART:{
            return {
                ...state,
                cartProducts: state.cartProducts.filter(
                    cartProduct => cartProduct.id !== action.payload
                )
            }
        }
        case UPDATE_PRODUCT_FROM_CART: {
            return {
                ...state,
                cartProducts: state.cartProducts.map((cartProduct)=>cartProduct.id === action.payload.index?{
                    ...cartProduct, qty:+action.payload.updatedQty
                }: cartProduct)
            }
        }
        case INCREMENT_PRODUCT_QTY:{
            return {
                ...state,
                cartProducts: state.cartProducts.map(
                    (cartProduct,i) => cartProduct.id === action.payload ? {
                        ...cartProduct,
                        qty: state.cartProducts[i].qty + 1
                    } : cartProduct
                )
            }
        }
        case DECREMENT_PRODUCT_QTY:{
            return {
                ...state,
                cartProducts: state.cartProducts.map(
                    (cartProduct, i) => cartProduct.id === action.payload ? {
                        ...cartProduct,
                        qty: state.cartProducts[i].qty - 1
                    } : cartProduct
                )
            }
        }
        default:
            return state;
    }
}
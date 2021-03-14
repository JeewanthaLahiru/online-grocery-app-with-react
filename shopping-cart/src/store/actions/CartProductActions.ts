import {
    AddProductToCart,
    DecrementCartQty,
    DeleteProductFromCart,
    IncrementCartQty,
    UpdateCartProduct
} from "../types/cartActionTypes";
import {
    ADD_PRODUCT_TO_CART, DECREMENT_PRODUCT_QTY,
    DELETE_PRODUCT_FROM_CART,
    INCREMENT_PRODUCT_QTY,
    UPDATE_PRODUCT_FROM_CART
} from "../constants/cartVariables";
import {ICartProduct} from "../../types/CartProducts";

export const addProductToCart = (newProduct : ICartProduct):AddProductToCart => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: newProduct
    }
}

export const deleteProductFromCart = (index: number): DeleteProductFromCart => {
    return {
        type: DELETE_PRODUCT_FROM_CART,
        payload: index
    }
}

export const updateProductFromCart = (index: number, updatedQty: number): UpdateCartProduct => {
    return {
        type: UPDATE_PRODUCT_FROM_CART,
        payload:{
            index: index,
            updatedQty: updatedQty
        }
    }
}

export const incrementProductQty = (index: number):IncrementCartQty => {
    return {
        type: INCREMENT_PRODUCT_QTY,
        payload: index
    }
}

export const decrementProductQty = (index: number):DecrementCartQty => {
    return{
        type: DECREMENT_PRODUCT_QTY,
        payload: index
    }
}
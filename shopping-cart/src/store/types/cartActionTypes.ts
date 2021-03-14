import * as CartTypes from '../constants/cartVariables';
import {ICartProduct} from "../../types/CartProducts";

export interface AddProductToCart{
    type: typeof CartTypes.ADD_PRODUCT_TO_CART,
    payload: ICartProduct
}

export interface DeleteProductFromCart{
    type: typeof CartTypes.DELETE_PRODUCT_FROM_CART,
    payload: number
}

export interface UpdateCartProduct{
    type: typeof CartTypes.UPDATE_PRODUCT_FROM_CART,
    payload:{
        index:number,
        updatedQty: number
    }
}

export interface IncrementCartQty{
    type:typeof CartTypes.INCREMENT_PRODUCT_QTY,
    payload: number
}

export interface DecrementCartQty{
    type: typeof CartTypes.DECREMENT_PRODUCT_QTY,
    payload: number
}

export type CartProductActionTypes = AddProductToCart | DeleteProductFromCart | UpdateCartProduct | IncrementCartQty | DecrementCartQty
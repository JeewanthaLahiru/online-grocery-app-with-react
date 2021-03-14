import {IProduct} from "../../types/Products";

export interface cartItem{
    id: number
    product: IProduct
    quantity: number
}

export interface cartState {
    cartItems: cartItem[]
}
import {IProduct} from "./Products";

export interface ICartProduct {
    id: number,
    product: IProduct,
    qty: number
}

export interface CartProductState {
    cartProducts: ICartProduct [],
    isDiscounted: boolean
}
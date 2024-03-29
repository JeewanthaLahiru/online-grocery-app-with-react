export type IAddressDetails = {
    name : string,
    streetAddress : string,
    city : string,
    country:string,
    postalCode : string,
    contact : string
}

export enum EPaymentMethod{
    CASH = "CASH",
    CARD = "CARD"
}

export type IPurchasedItems = {
    itemId : string,
    itemName : string,
    itemPrice : string,
    itemQty : string,
}

export enum EOrderStatus{
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

export type IOrder = {
    orderId : string,
    email : string,
    billingDetails : IAddressDetails,
    deliveryDetails : IAddressDetails,
    instructions : string,
    purchasedItems : IPurchasedItems[],
    paymentMethod : EPaymentMethod,
    subTotal : string,
    discount : string,
    orderStatus : EOrderStatus
}

export type IOrderGql = {
    email: string,
    billingDetails: IAddressDetails,
    shippingDetails: IAddressDetails,
    instructions: string,
    purchasedItems: IPurchasedItems[],
    paymentMethod: string,
    subTotal: string,
    discount: string,
    orderStatus: string
}
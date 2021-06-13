export type deliveryTypes = {
    fullName : string
    userAddress : address
    email : string
    retypeEmail : string
    password : string
    deliveryAddress : address
    deliveryInstructions : string
    paymentMethod : paymentMethod
}

export enum paymentMethod{
    cash = "CASH",
    card = "CARD"
}

export type address = {
    address : string
    city : string
    postalCode : string
    country : string
    contactNumber : string
}
export interface IProduct{
    id: number
    name: string
    category: string
    price: number
    previousPrice: number
    image: string
    description: string
}

export interface IProductUpload{
    name: string
    category: string
    price: string
    previousPrice: string
    image: string
    description: string
}
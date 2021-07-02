import {gql} from "@apollo/client/core";

export const GET_PRODUCTS = gql`
        query getproducts{
            getproducts{
                id
                name
                price
                previousPrice
                image
                description
                category
            }
        }
    `;

export const GET_ONE_PRODUCT = gql`
    query getOneProduct($input: FindOneProductInput){
        getOneProduct(input: $input){
            id
            name
            price
            previousPrice
            image
            description
            category
        }
    }
`;
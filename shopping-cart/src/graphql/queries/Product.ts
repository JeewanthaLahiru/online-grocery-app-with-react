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
            }
        }
    `;
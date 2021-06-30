import {gql} from "@apollo/client/core";

export const GetProducts = gql`
        query getproducts{
            getproducts{
                id
            }
        }
    `;
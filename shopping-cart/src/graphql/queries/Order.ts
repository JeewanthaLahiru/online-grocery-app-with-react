import {gql} from "@apollo/client/core";

export const GET_ORDERS_FOR_TABLE = gql`
    query getOrders{
        getOrders{
            id
            shippingDetails{
              name
              city
              postalCode
            }
            subTotal
        }
    }
`;
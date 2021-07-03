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
            orderStatus
        }
    }
`;

export const GET_ONE_ORDER = gql`
    query getOneOrder($input: FindOneOrderInput){
        getOneOrder(input: $input){
            id
        }
    }
`;
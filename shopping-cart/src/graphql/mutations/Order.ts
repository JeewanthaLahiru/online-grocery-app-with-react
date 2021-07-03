import {gql} from "@apollo/client/core";

export const CREATE_ORDER_MUTATION = gql`
    mutation createOrder($input: CreateOrderInput){
        createOrder(input: $input){
            id
        }
    }
`;
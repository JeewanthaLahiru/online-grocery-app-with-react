import {gql} from "@apollo/client";

export const CREATE_PRODUCT_MUTATION = gql`
	mutation createproduct($input: CreateProductInput){
		createproduct(input: $input){
			id
		}
	}
`;

export const UPDATE_PRODUCT_MUTATION = gql`
    mutation updateproduct($input: UpdateProductInput) {
        updateproduct(input: $input){
            id
        }
    }
`;

export const DELETE_PRODUCT_MUTATION = gql`
    mutation deleteproduct($input: String){
        deleteproduct(input: $input){
            id
        }
    }
`;
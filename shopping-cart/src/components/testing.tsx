import React from "react";
import { useQuery} from "@apollo/client";
import {gql} from "@apollo/client/core";



const Testing:React.FC = () => {

    const GetProducts = gql`
        query getproducts{
            getproducts{
                id
            }
        }
    `;

    const {loading, error, data, refetch} = useQuery(GetProducts);
    if (loading) return <React.Fragment>'Loading...'</React.Fragment>;
    if (error) return <React.Fragment>`Error! ${error.message}`</React.Fragment>;

    const datalist = data;
    console.log(datalist.getproducts);

    return(
        <React.Fragment>
            hello
        </React.Fragment>
    )
}

export default Testing;
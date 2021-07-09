import React, {useEffect, useState} from 'react';
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Image} from 'react-bootstrap';
import axios from "axios";
import {GENERAGE_GET_URL} from "../../../assets/variables/APIKeys";

type addProductImageProps = {
    imageName: string
}
const AddProductImage:React.FC<addProductImageProps> = (props) => {

    const [imageUrl , setImageUrl] = useState();
    const generateGetUrl = GENERAGE_GET_URL;

    useEffect(() => {
        const getOptions = {
            params: {
                Key: props.imageName,
                ContentType: props.imageName.split(/[.]/)[1]
            }
        };

        axios
            .get(generateGetUrl, getOptions)
            .then(res => {
                setImageUrl(res.data);
            })
            .catch(err => {
                console.log("error in generateGet Url : \n"+ err);
            })
    }, [])


    return(
        <React.Fragment>
            <Image src={imageUrl}/>
        </React.Fragment>
    )
}

export default AddProductImage;
import React, {useEffect, useState} from 'react';
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Image} from 'react-bootstrap';
import axios from "axios";

type productImageProps = {
    imageName: string,
    data: any
}
const ProductImage:React.FC<productImageProps> = (props) => {

    const [imageUrl , setImageUrl] = useState();
    const generateGetUrl = 'http://ec2-54-174-33-34.compute-1.amazonaws.com:4000/generate-get-url';

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

    return(
        <React.Fragment>
            <Image src={imageUrl? imageUrl : DefaultImg}/>
        </React.Fragment>
    )
}

export default ProductImage;
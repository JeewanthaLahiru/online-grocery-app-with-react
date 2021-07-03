import React, {useState} from "react";
import axios from "axios";
import {Image} from "react-bootstrap";

type CheckoutProductImageProps = {
    image: string
}

const CheckoutProductImage:React.FC<CheckoutProductImageProps> =(props) => {
    const [imageUrl , setImageUrl] = useState();
    const generateGetUrl = 'http://localhost:4000/generate-get-url';

    const getOptions = {
        params: {
            Key: props.image,
            ContentType: props.image.split(/[.]/)[1]
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
            <Image src={imageUrl} className='product-img'/>
        </React.Fragment>
    )
}

export default CheckoutProductImage;
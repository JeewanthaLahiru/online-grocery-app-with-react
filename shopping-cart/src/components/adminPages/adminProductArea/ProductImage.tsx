import React, {useEffect, useState} from 'react';
import DefaultImg from "../../../assets/images/default/default.jpg";
import {Image} from 'react-bootstrap';
import axios from "axios";
import {GENERAGE_GET_URL} from "../../../assets/variables/APIKeys";

type productImageProps = {
    imageName: string,
    data: any
}
const ProductImage:React.FC<productImageProps> = (props) => {

    const [imageUrl , setImageUrl] = useState();
    const generateGetUrl = GENERAGE_GET_URL;

    const getOptions = {
        params: {
            Key: props.imageName,
            ContentType: props.imageName.split(/[.]/)[1]
        }
    };
    useEffect(() => {
        axios
            .get(generateGetUrl, getOptions)
            .then(res => {
                setImageUrl(res.data);
            })
            .catch(err => {
                console.log("error in generateGet Url : \n"+ err);
            })
    },[props.imageName])

    return(
        <React.Fragment>
            <Image src={imageUrl? imageUrl : DefaultImg}/>
        </React.Fragment>
    )
}

export default ProductImage;
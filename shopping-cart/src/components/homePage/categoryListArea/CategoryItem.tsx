import React from 'react';
import {Col, Image, Row} from "react-bootstrap";

type CategoryItemProps = {
    image:string
    name:string
}

const CategoryItem:React.FC<CategoryItemProps> = (props) => {
    return(
        <Row className="mx-0 category-item">
            <Col xs={12} className="image-container" >
                <Image src={props.image} className="category-image" />
            </Col>
            <Col xs={12} className="p-0" >
                <h5 className="text-center category-name">{props.name}</h5>
            </Col>
        </Row>
    )
}

export default CategoryItem;
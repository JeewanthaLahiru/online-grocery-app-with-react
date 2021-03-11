import React from 'react';
import {Col, Image, Row} from "react-bootstrap";

type CategoryItemProps = {
    image:string
    name:string
}

const CategoryItem:React.FC<CategoryItemProps> = (props) => {
    return(
        <Row className="mx-0 category-item">
            <Col xs={12}>
                <Image src={props.image} className="category-image" />
            </Col>
            <Col xs={12}>
                <h5 className="text-center">{props.name}</h5>
            </Col>
        </Row>
    )
}

export default CategoryItem;
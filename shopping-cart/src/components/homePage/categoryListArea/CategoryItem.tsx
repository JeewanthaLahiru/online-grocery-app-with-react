import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../../store/actions/CategoryActions";
import {AppState} from "../../../store/reducers";

type CategoryItemProps = {
    image:string
    name:string
}

const CategoryItem:React.FC<CategoryItemProps> = (props) => {

    const currentState = useSelector((state:AppState)=>state.category.category);

    const dispatch = useDispatch();

    return(
        <Col xs={4} md={2} className="mb-2" onClick={()=>dispatch(changeCategory(props.name))} >
            <Row className={"mx-0 category-item " + (props.name === currentState ? 'active-category':'')}>
                <Col xs={12} className="image-container" >
                    <Image src={props.image} className="category-image" />
                </Col>
                <Col xs={12} className="p-0" >
                    <h5 className="text-center category-name">{props.name}</h5>
                </Col>
            </Row>
        </Col>
    )
}

export default CategoryItem;
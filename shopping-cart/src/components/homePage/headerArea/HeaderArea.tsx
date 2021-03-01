import React from 'react';
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";
import NavigationBar from "./NavigationBar";
import {Container} from "react-bootstrap";

const HeadreArea:React.FC = () => {
    return(
        <Container fluid={true} className="m-0 p-0" >
            <TopHeader/>
            <BottomHeader/>
            <NavigationBar/>
        </Container>
    )
}

export default HeadreArea;
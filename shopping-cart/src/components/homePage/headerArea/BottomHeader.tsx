import React, {useState} from "react";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import CartArea from "./CartArea";

const BottomHeader:React.FC = () => {

    const [isCartVisible, setIsCartVisible] = useState(true);

    const cartHandler = () => {
        setIsCartVisible(!isCartVisible);
    }

    return (
        <Navbar sticky='top' bg="white" expand="lg" className="bottom-header"
                onClick={() => cartHandler()}
        >
            <div className="shadow-line" ></div>
            <Navbar.Brand href="#home" className="text-success bottom-header-title" >
                <span>LOGO</span>
            </Navbar.Brand>

            <Nav className="ml-auto">
                <Nav.Link href="#home" className="notification">
                    <span><i className="feather icon-shopping-cart"/></span>
                    <span className="badge">2</span>
                    {isCartVisible && <CartArea/>}
                </Nav.Link>

            </Nav>
            <Nav.Link href="#link">
                <Button variant="success" size="sm" className="check-out-button" >Check out</Button>
            </Nav.Link>
        </Navbar>
    )
}

export default BottomHeader;
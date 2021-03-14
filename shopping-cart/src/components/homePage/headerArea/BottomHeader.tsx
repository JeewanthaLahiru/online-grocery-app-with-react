import React, {useState} from "react";
import {Button, Dropdown, DropdownButton, Nav, Navbar} from "react-bootstrap";
import CartArea from "./CartArea";
import {Link} from 'react-router-dom';

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
            <Link to={"/"}>
                <Navbar.Brand href="#home" className="text-success bottom-header-title" >
                    <span>LOGO</span>
                </Navbar.Brand>
            </Link>


            <Nav className="ml-auto">
                <CartArea/>



            </Nav>
            <Nav.Link href="#link">
                <Link to={"/checkout"} >
                    <Button variant="success" size="sm" className="check-out-button" >Check out</Button>
                </Link>
            </Nav.Link>
        </Navbar>
    )
}

export default BottomHeader;
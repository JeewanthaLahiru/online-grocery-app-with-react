import React from "react";
import {Container, DropdownButton, Navbar, Nav, Dropdown} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {changeCategory} from "../../../store/actions/CategoryActions";

const NavigationBar:React.FC = () => {

    const dispatch = useDispatch();

    return (
        <Container fluid={true} className="navBar">
            <Navbar bg="white" >

                <DropdownButton title="Categories" variant="outline-secondary">
                    <Dropdown.Item className='dropdown-item' href="#/action-1"
                        onClick={()=>dispatch(changeCategory('Grocery'))}
                    >Grocery</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-2"
                                   onClick={()=>dispatch(changeCategory('Pharmacy'))}
                    >Pharmacy</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-3"
                                   onClick={()=>dispatch(changeCategory('Food'))}
                    >Food</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href="#/action-3"
                                   onClick={()=>dispatch(changeCategory('Electronic'))}
                    >Electronic</Dropdown.Item>
                </DropdownButton>
                <Nav.Link href="#home" className="text-secondary" >Home</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >FAQ</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >About Us</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >Contact Us</Nav.Link>
            </Navbar>
        </Container>
    )
}

export default NavigationBar;
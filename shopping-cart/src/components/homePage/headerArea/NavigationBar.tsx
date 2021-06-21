import React from "react";
import {Container, DropdownButton, Navbar, Nav, Dropdown, Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {changeCategory} from "../../../store/actions/CategoryActions";
import {AppState} from "../../../store/reducers";
import {useHistory} from "react-router-dom";

const NavigationBar:React.FC = () => {
    const logedState = useSelector((state:AppState) => state.auth.logged);
    const dispatch = useDispatch();

    const history = useHistory();

    const handleOnProfileClick = () => {
        history.push("/admin");
    }
    const handleOnProductClick = () => {
        history.push("/admin/product");
    }
    const handleOnOrderClick = () => {
        history.push("/admin/orders");
    }

    return (
        <Container fluid={true} className="navBar">
            <Navbar bg="white" >

                <DropdownButton title="Categories" variant="outline-secondary">
                    <Dropdown.Item className='dropdown-item' href='#product-list'
                        onClick={()=>dispatch(changeCategory('Grocery'))}
                    >Grocery</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href='#product-list'
                                   onClick={()=>dispatch(changeCategory('Pharmacy'))}
                    >Pharmacy</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href='#product-list'
                                   onClick={()=>dispatch(changeCategory('Food'))}
                    >Food</Dropdown.Item>
                    <Dropdown.Item className='dropdown-item' href='#product-list'
                                   onClick={()=>dispatch(changeCategory('Electronic'))}
                    >Electronic</Dropdown.Item>
                </DropdownButton>
                <Nav.Link href="#home" className="text-secondary" >Home</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >FAQ</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >About Us</Nav.Link>
                <Nav.Link href="#link" className="text-secondary" >Contact Us</Nav.Link>
                {logedState &&
                    <div className="ml-auto" >
                        <Button variant={"light"} onClick={handleOnProfileClick} className="admin-nav" >
                            <i className="feather icon-user" />
                            &nbsp;profile
                        </Button>
                        <Button variant={"light"} onClick={handleOnProductClick} className="admin-nav">
                            <i className="feather icon-shopping-bag" />
                            &nbsp;Product
                        </Button>
                        <Button variant={"light"} onClick={handleOnOrderClick} className="admin-nav">
                            <i className="feather icon-list" />
                            &nbsp;Orders
                        </Button>
                    </div>

                }

            </Navbar>
        </Container>
    )
}

export default NavigationBar;
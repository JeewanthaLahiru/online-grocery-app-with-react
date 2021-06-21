import React from "react";
import {Button, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminHeader:React.FC = () => {
    return(
        <React.Fragment>
            <Navbar bg="dark" variant="dark" expand={"sm"}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Link to={"admin"}>
                            <Nav.Link href="#home" className="px-lg-5">Profile</Nav.Link>
                        </Link>
                        <Link to={"admin/product"}>
                            <Nav.Link href="#home" className="px-lg-5" >Products</Nav.Link>
                        </Link>
                        <Link to={"admin/orders"}>
                            <Nav.Link href="#home" className="px-lg-5" >Orders</Nav.Link>
                        </Link>
                        <Link to={"admin/Delivery"}>
                            <Nav.Link href="#home" className="px-lg-5">Delivery</Nav.Link>
                        </Link>
                        <Link to={"admin/Settings"}>
                            <Nav.Link href="#home" className="px-lg-5">Settings</Nav.Link>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </React.Fragment>
    )
}

export default AdminHeader;
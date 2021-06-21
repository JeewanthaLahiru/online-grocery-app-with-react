import React from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../store/reducers";
import {logout} from "../../../store/actions/AuthActions";

const TopHeader:React.FC = () => {
    const history = useHistory();
    const loggedState = useSelector((state:AppState) => state.auth.logged);
    const dispatch = useDispatch();

    const handleOnLogOutClick = () => {
        dispatch(logout(false));
        history.push("/");
    }

    return (
        <Container fluid={true} className="top-header" >
            <Navbar bg="white" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav mr-0" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" >
                        <Nav.Link href="#home"> <i className="feather icon-truck"/> Delivery Areas</Nav.Link>
                        <Nav.Link href="#link"> <i className="feather icon-phone-call" /> +94 112 123 456</Nav.Link>
                        {!loggedState &&
                            <Nav.Link>
                                <Link to={"/register"}>
                                    <Button variant="outline-success">Register</Button>
                                </Link>
                            </Nav.Link>
                        }
                        {!loggedState &&
                            <Nav.Link href="#home">
                                <Link to={"/login"}>
                                    <Button variant="light" className="text-success" >Login</Button>
                                </Link>
                            </Nav.Link>
                        }
                        {loggedState &&
                            <Button
                                variant="danger"
                                onClick={handleOnLogOutClick}
                            >
                                Log out
                            </Button>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default TopHeader;
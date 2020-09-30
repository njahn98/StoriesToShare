import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import './Navigation.css'
import CreateButton from './CreateButton'

function Navigation() {
    return (
        <Navbar className="box-shadow navbar-dark" bg="dark" expand="lg" sticky='top'>
            <Navbar.Brand href="#home">Stories To Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto margin">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Form inline className="margin">
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>

                <CreateButton variant="outline-light"></CreateButton>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigation;
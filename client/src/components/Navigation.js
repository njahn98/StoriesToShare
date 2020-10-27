//import React Components
import React from 'react';
//import Bootstrap Components
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
//import CSS
import './Navigation.css'
//import Custom Components
import CreateButton from './CreateButton'
//import React Router Components
require('react-router-dom');


function Navigation() {
    return (
        <Navbar className="box-shadow navbar-dark" bg="dark" expand="lg" sticky='top'>
            <Navbar.Brand href="#home">Stories To Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto margin">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/post">Create</Nav.Link>
                    <Nav.Link href="/discover">Discover</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/createAccount">Create Account</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigation;
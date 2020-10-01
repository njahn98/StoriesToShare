//import React Components
import React from 'react';
//import React Router Components
import Link from 'react-router-dom/Link';
//import Bootstrap Components
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
//import CSS
import './Navigation.css'
//import Custom Components
import CreateButton from './CreateButton'


function Navigation({ canSearch }) {
    return (
        <Navbar className="box-shadow navbar-dark" bg="dark" expand="lg" sticky='top'>
            <Navbar.Brand href="#home">Stories To Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto margin">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/discover">Discover</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Navigation;
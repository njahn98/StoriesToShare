//import React Components
import React from 'react';
//import Bootstrap Components
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
//import CSS
import './Navigation.css';
//import Custom Components
import LogoutButton from './LogoutButton';
import Login from './Login'
//import React Router Components
require('react-router-dom');


function Navigation() {
    return (
        <Navbar className="box-shadow navbar-dark" bg="dark" expand="lg" sticky='top'>
            <Navbar.Brand href="/">Stories To Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto margin">
                    <Nav.Link href="/">Home</Nav.Link>
                    {(localStorage.getItem("token") && localStorage.getItem("token").length !== 0) && <Nav.Link href="/post">Create</Nav.Link>}
                    <Nav.Link href="/discover">Discover</Nav.Link>
                </Nav>
                <Form inline>
                    {(localStorage.getItem("token") && localStorage.getItem("token").length !== 0) ? <LogoutButton className='mr-sm-2'></LogoutButton> : <Login className='mr-sm-2'></Login>}
                    {!localStorage.getItem("token") && <Button className="mr-sm-2" href="/account/create">Create Account</Button>}
                </Form>
            </Navbar.Collapse>
        </Navbar >
    );
}
export default Navigation;
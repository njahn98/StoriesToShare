import React from 'react';
import { Button } from 'react-bootstrap'

function LogoutButton() {
    //deletes authenticated login token
    const logout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    }

    return (
        <Button variant="light" className="mr-sm-2" onClick={logout}>Logout</Button>
    )
}
export default LogoutButton;
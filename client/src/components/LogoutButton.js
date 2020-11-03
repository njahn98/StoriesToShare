import React from 'react';
import { Button } from 'react-bootstrap'

function LogoutButton() {

    const logout = () => {
        localStorage.removeItem("token");
        window.location = "/";
    }

    return (
        <Button className="mr-sm-2" onClick={logout}>Logout</Button>
    )
}
export default LogoutButton;
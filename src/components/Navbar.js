import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function TopNavBar() {

    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/"></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav>
        </Navbar>
    );

};

export default TopNavBar;
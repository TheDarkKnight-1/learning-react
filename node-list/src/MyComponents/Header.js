import React from 'react'
import { Button } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export default function Header(props) {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
           {props.searchBar? <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>:""}
        </Navbar>
    )
}






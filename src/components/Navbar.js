import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbars = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">My App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/login' >Login</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navbars

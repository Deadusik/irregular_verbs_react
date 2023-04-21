import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigatebar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">IVerb</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/irregular_verbs">Irregular verbs</Nav.Link>
                        <Nav.Link href="/test_verbs">Test</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/signin">Sign in</Nav.Link>
                        <Nav.Link href="/registration">Registration</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigatebar;
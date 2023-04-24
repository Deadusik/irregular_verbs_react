import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Navigatebar = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark" fixed='top'>
                <Container>
                    <Navbar.Brand href="/">IVerb</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Головна</Nav.Link>
                        <Nav.Link href="/irregular_verbs">Неправильні глаголи</Nav.Link>
                        <Nav.Link href="/test_verbs">Тестування</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href="/signin">Вхід</Nav.Link>
                        <Nav.Link href="/registration">Регістрація</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Navigatebar;
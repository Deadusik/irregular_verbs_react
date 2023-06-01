import React, { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
//react-bootstrap icons
import { FaUser } from 'react-icons/fa'
import { FaKey } from 'react-icons/fa'

const Navigatebar = observer(() => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    const role = user.role
    console.log(isAuth)

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
                    { // guest navbar
                        !isAuth &&
                        <Nav className="ml-auto">
                            <Nav.Link href="/signin">Вхід</Nav.Link>
                            <Nav.Link href="/registration">Регістрація</Nav.Link>
                        </Nav>
                    }
                    { // logined user navbar
                        isAuth &&
                        <Nav className="ml-auto">
                            {role === 'ADMIN' && // if user is admin
                                <Nav.Link href="/admin_panel">
                                    <FaKey size={20} />
                                </Nav.Link>
                            }
                            <Nav.Link>
                                <FaUser size={20} />
                            </Nav.Link>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    );
})

export default Navigatebar;
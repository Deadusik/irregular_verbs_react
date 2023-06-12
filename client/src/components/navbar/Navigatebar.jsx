import React, { useContext } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Context } from '../../index'
import { observer } from 'mobx-react-lite'
import Offcanvas from 'react-bootstrap/Offcanvas'
//react-bootstrap icons
import UserMenuDropDown from '../dropdowns/UserMenuDropDown'
import AdminMenuDropDown from '../dropdowns/AdminMenuDropDown'

const Navigatebar = observer(() => {
    const { user } = useContext(Context)
    const isAuth = user.isAuth
    const role = user.role

    return (
        <>
            <Navbar bg="primary" variant="dark" fixed='top' expand='md'>
                <Container>
                    <Navbar.Brand href="/">IVerb</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-sm`} />
                    <Navbar.Offcanvas
                        aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
                        placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>
                                Меню
                            </Offcanvas.Title>
                        </Offcanvas.Header>

                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Головна</Nav.Link>
                                <Nav.Link href="/irregular_verbs">Неправильні глаголи</Nav.Link>
                                <Nav.Link href="/test_verbs">Тестування</Nav.Link>
                            </Nav>
                            { // guest navbar
                                !isAuth &&
                                <Nav>
                                    <Nav.Link href="/signin">Вхід</Nav.Link>
                                    <Nav.Link href="/registration">Регістрація</Nav.Link>
                                </Nav>
                            }
                            { // logined user navbar
                                isAuth &&
                                <Nav className="ml-auto">
                                    {role === 'ADMIN' && // if user is admin
                                        <AdminMenuDropDown />
                                    }
                                    <UserMenuDropDown />
                                </Nav>
                            }
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    );
})

export default Navigatebar;
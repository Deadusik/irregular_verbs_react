import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Registration from '../components/forms/user_forms/Registration'
import SignIn from '../components/forms/user_forms/SignIn'
import styles from './UserAuth.module.scss'

const UserAuth = () => {
    const location = useLocation()

    return (
        <Container className={[styles.UserAuth, 'd-flex justify-content-center align-items-center mt-5'].join(' ')}>
            <Row className='d-flex w-50'>
                {
                    location.pathname === '/registration'
                    &&
                    <Registration />
                }
                {
                    location.pathname === '/signin'
                    &&
                    <SignIn />
                }
            </Row>
        </Container>
    )
}

export default UserAuth
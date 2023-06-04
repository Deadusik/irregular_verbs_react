import React, { useState, useContext } from 'react'
import { Card, Button, Form, Row, InputGroup, Col } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { Context } from '../../index'
import { useNavigate } from 'react-router-dom'
import { HOME } from '../../router/paths'
import { login } from '../../http/userAPI'
//react bootstrap icons
import { AiFillLock } from 'react-icons/ai'
import { Link } from 'react-router-dom'

import * as formik from 'formik'
import * as yup from 'yup'




const SignIn = (errors) => {
    const { Formik } = formik

    const [userLogin, setUserLogin] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const signIn = async () => {
        const { data } = await login(userLogin, password)
        if (data.token) {
            const { login, email, role } = jwt_decode(data.token)
            user.setLogin(login)
            user.setEmail(email)
            user.setRole(role)
            user.setIsAuth(true)

            navigate(HOME)
        }
        if (data.message) {
            errors.message = data.message
        }
    }

    return (
        <div>
            <Card className='md-4'>
                <Card.Body className='px-4'>
                    <Formik
                        initialValues={{
                            userName: '',
                            email: '',
                            password: '',
                            passwordRepeat: ''
                        }}>
                        {({ handleSubmit, handleChange, values, touched, errors }) => (
                            <Form noValidate onSubmit={handleSubmit}>
                                <h2 className='text-center'>Логін</h2>
                                { /* Nickname input */}
                                <Row>
                                    <InputGroup hasValidation>
                                        <InputGroup.Text>
                                            @
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder='Введіть емайл'
                                            type='text'
                                            onChange={e => setUserLogin(e.target.value)} />
                                    </InputGroup>
                                </Row>
                                { /* Password input */}
                                <Row className='mt-2'>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <AiFillLock />
                                        </InputGroup.Text>
                                        <Form.Control placeholder='Введіть пароль'
                                            type='password'
                                            onChange={e => setPassword(e.target.value)} />
                                        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                                    </InputGroup>
                                </Row>
                                { /* Submit btn and link to sign in */}
                                <Row className='d-flex mt-2'>
                                    <Col className='d-flex justify-content-between align-items-center'>
                                        <Button
                                            onClick={() => {
                                                signIn(errors)
                                            }}>
                                            Війти
                                        </Button>
                                        <Link to={'/registration'}>Немає аккаунта? Створити</Link>
                                    </Col>
                                </Row>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>




            <Card className='md-4'>
                <Card.Body className='px-4'>
                    <Form>
                        <h2 className='text-center'>Логін</h2>
                        { /* Email input */}
                        <Row className='mt-2'>
                            <InputGroup>
                                <InputGroup.Text>
                                    @
                                </InputGroup.Text>
                                <Form.Control
                                    placeholder='Введіть емайл'
                                    type='text'
                                    onChange={e => setUserLogin(e.target.value)} />
                            </InputGroup>
                        </Row>
                        { /* Password input */}
                        <Row className='mt-2'>
                            <InputGroup>
                                <InputGroup.Text>
                                    <AiFillLock />
                                </InputGroup.Text>
                                <Form.Control placeholder='Введіть пароль'
                                    type='password'
                                    onChange={e => setPassword(e.target.value)} />
                            </InputGroup>
                        </Row>
                        { /* Submit btn and link to sign in */}
                        <Row className='d-flex mt-2'>
                            <Col className='d-flex justify-content-between align-items-center'>
                                <Button
                                    onClick={() => {
                                        signIn()
                                    }}>
                                    Війти
                                </Button>
                                <Link to={'/registration'}>Немає аккаунта? Створити</Link>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SignIn
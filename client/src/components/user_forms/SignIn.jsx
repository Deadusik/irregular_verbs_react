import React, { useState } from 'react'
import { Card, Button, Form, Row, InputGroup, Col } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
//react bootstrap icons
import { AiFillLock } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { login } from '../../http/userAPI'


const SignIn = () => {
    const [userLogin, setUserLogin] = useState('')
    const [password, setPassword] = useState('')

    const signIn = async () => {
        const { data } = await login(userLogin, password)

        return jwt_decode(data.token)
    }

    return (
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
    )
}

export default SignIn
import React from 'react'
import { Card, Button, Form, Row, InputGroup, Col } from 'react-bootstrap'
//react bootstrap icons
import { AiFillLock } from 'react-icons/ai'
import { Link } from 'react-router-dom'


const SignIn = () => {
    return (
        <Card className='md-4'>
            <Card.Body className='px-4'>
                <Form>
                    <h2 className='text-center'>Логін</h2>
                    { /* Email input */ }
                    <Row className='mt-2'>
                        <InputGroup>
                            <InputGroup.Text>
                                @
                            </InputGroup.Text>
                            <Form.Control placeholder='Введіть емайл' type='email'/>
                        </InputGroup>
                    </Row>
                    { /* Password input */ }
                    <Row className='mt-2'>
                        <InputGroup>
                            <InputGroup.Text>
                                <AiFillLock/>   
                            </InputGroup.Text>
                            <Form.Control placeholder='Введіть пароль' type='password'/>
                        </InputGroup>
                    </Row>
                    { /* Submit btn and link to sign in */ }
                    <Row className='d-flex mt-2'>
                        <Col className='d-flex justify-content-between align-items-center'>
                            <Button type='submit'>
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
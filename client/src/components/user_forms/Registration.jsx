import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Form, Row, InputGroup, Col } from 'react-bootstrap'
import * as formik from 'formik'
import * as yup from 'yup'
//react bootstrap icons
import { AiOutlineUser } from 'react-icons/ai'
import { AiFillLock } from 'react-icons/ai'
import { BiRepeat } from 'react-icons/bi'

const Registration = () => {
    const { Formik } = formik

    const schema = yup.object().shape({
        userName: yup.string().required()
    })

    return (
        <Card className='md-4'>
            <Card.Body className='px-4'>
                <Formik validationSchema={schema}
                initialValues={{
                    userName: ''
                }}>
                    <Form>
                        <h2 className='text-center'>Регістрація</h2>
                        { /* Nickname input */ }
                        <Row>
                            <InputGroup hasValidation>
                                <InputGroup.Text>
                                    <AiOutlineUser/>
                                </InputGroup.Text>
                                <Form.Control placeholder='Введіть нікнейм' isInvalid={true}/>
                                <Form.Control.Feedback type="invalid">Looks bad!</Form.Control.Feedback>
                            </InputGroup>
                        </Row>
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
                        { /* Repeat password input */ }
                        <Row className='mt-2'>
                            <InputGroup>
                                <InputGroup.Text>
                                    <BiRepeat/>   
                                </InputGroup.Text>
                                <Form.Control placeholder='Повторіть пароль' type='password'/>
                            </InputGroup>
                        </Row>
                        { /* Submit btn and link to sign in */ }
                        <Row className='d-flex mt-2'>
                            <Col className='d-flex justify-content-between align-items-center'>
                                <Button type='submit'>
                                    Зареєструватися
                                </Button>
                                <Link to={'/signin'}>Є аккаунт? Зайти</Link>
                            </Col>
                        </Row>
                    </Form>
                </Formik>
            </Card.Body>
        </Card>
    )
}

export default Registration
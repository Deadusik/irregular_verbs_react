import React, { useState } from 'react'
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
        userName: yup.string()
            .required('Ім\'я користувача обов\'язкове')
            .min(6, 'Ім\'я користувача має бути не меньше 6 символів')
            .max(18, 'Ім\'я користувача має бути не більше 18 символів'),
        email: yup.string()
            .required('Email обов\'язковий')
            .min(6, 'Email має містити в собі не меньше 6 символів')
            .max(32, 'Email має містити в собі не більше 32 символів')
            .email('Данні не є емайлом'),
        password: yup.string()
            .required('Пароль обов\'язковий')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Пароль має містити 8 символив, одну букву та одну цифру'),
        passwordRepeat: yup.string()
            .required('Повторення паролю обов\'язкове')
            .oneOf([yup.ref('password'), null], 'Паролі не співпадають')
    })

    return (
        <Card className='md-4'>
            <Card.Body className='px-4'>
                <Formik
                    validationSchema={schema}
                    initialValues={{
                        userName: '',
                        email: '',
                        password: '',
                        passwordRepeat: ''
                    }}>
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <h2 className='text-center'>Регістрація</h2>
                            { /* Nickname input */}
                            <Row>
                                <InputGroup hasValidation>
                                    <InputGroup.Text>
                                        <AiOutlineUser />
                                    </InputGroup.Text>
                                    <Form.Control
                                        name='userName'
                                        placeholder='Введіть нікнейм'
                                        isInvalid={errors.userName}
                                        onChange={e => values.userName = e.target.value} />
                                    <Form.Control.Feedback type="invalid">{errors.userName}</Form.Control.Feedback>
                                </InputGroup>
                            </Row>
                            { /* Email input */}
                            <Row className='mt-2'>
                                <InputGroup hasValidation>
                                    <InputGroup.Text>
                                        @
                                    </InputGroup.Text>
                                    <Form.Control
                                        name='email'
                                        placeholder='Введіть емайл'
                                        type='email'
                                        onChange={e => values.email = e.target.value}
                                        isInvalid={errors.email} />
                                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                </InputGroup>
                            </Row>
                            { /* Password input */}
                            <Row className='mt-2'>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <AiFillLock />
                                    </InputGroup.Text>
                                    <Form.Control
                                        name='password'
                                        placeholder='Введіть пароль'
                                        type='password'
                                        onChange={e => values.password = e.target.value}
                                        isInvalid={errors.password} />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                </InputGroup>
                            </Row>
                            { /* Repeat password input */}
                            <Row className='mt-2'>
                                <InputGroup>
                                    <InputGroup.Text>
                                        <BiRepeat />
                                    </InputGroup.Text>
                                    <Form.Control
                                        name='passwordRepeat'
                                        placeholder='Повторіть пароль'
                                        type='password'
                                        onChange={e => values.passwordRepeat = e.target.value}
                                        isInvalid={errors.passwordRepeat} />
                                    <Form.Control.Feedback type="invalid">{errors.passwordRepeat}</Form.Control.Feedback>
                                </InputGroup>
                            </Row>
                            { /* Submit btn and link to sign in */}
                            <Row className='d-flex mt-2'>
                                <Col className='d-flex justify-content-between align-items-center'>
                                    <Button type='submit'>
                                        Зареєструватися
                                    </Button>
                                    <Link to={'/signin'}>Є аккаунт? Зайти</Link>
                                </Col>
                            </Row>
                        </Form>
                    )}
                </Formik>
            </Card.Body>
        </Card>
    )
}

export default Registration
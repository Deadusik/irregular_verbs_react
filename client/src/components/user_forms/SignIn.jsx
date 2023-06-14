import React, { useState, useContext } from 'react'
import { Card, Button, Form, Row, InputGroup, Col } from 'react-bootstrap'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../index'
import { HOME } from '../../router/paths'
import { login } from '../../http/userAPI'
//validation libraries
import * as formik from 'formik'
import * as yup from 'yup'
//react bootstrap icons
import { AiFillLock } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const { Formik } = formik
    const navigate = useNavigate()

    const { user } = useContext(Context)
    const [serverError, setServerError] = useState('')

    const signIn = async (userLogin, password) => {
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
            return data.message
        }
    }

    const schema = yup.object().shape({
        login: yup.string()
            .required('Заповніть поле'),
        password: yup.string()
            .required('Заповніть поле')
    })

    return (
        <div>
            <Card className='md-4'>
                <Card.Body className='px-4'>
                    <Formik
                        validationSchema={schema}
                        initialValues={{
                            login: '',
                            password: '',
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
                                            isInvalid={serverError || errors.login}
                                            onChange={e => values.login = e.target.value} />
                                        <Form.Control.Feedback type='invalid'>{errors.login}</Form.Control.Feedback>
                                    </InputGroup>
                                </Row>
                                { /* Password input */}
                                <Row className='mt-2'>
                                    <InputGroup>
                                        <InputGroup.Text>
                                            <AiFillLock />
                                        </InputGroup.Text>
                                        <Form.Control placeholder='Введіть пароль'
                                            name='password'
                                            type='password'
                                            isInvalid={serverError || errors.password}
                                            onChange={e => values.password = e.target.value} />
                                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                                        <Form.Control.Feedback type='invalid'>{serverError}</Form.Control.Feedback>
                                    </InputGroup>
                                </Row>
                                { /* Submit btn and link to sign in */}
                                <Row className='d-flex mt-2'>
                                    <Col className='d-flex justify-content-between align-items-center'>
                                        <Button type='submit'
                                            onClick={() => {
                                                console.log('errors:', errors.login, errors.password)
                                                if (!errors.login && !errors.password) {
                                                    signIn(values.login, values.password).then(error => {
                                                        if (error) setServerError(error)
                                                    })
                                                }
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
        </div>
    )
}

export default SignIn
import React from 'react'
import { Card, Container, Row, Col, Button } from 'react-bootstrap'
import styles from './Home.module.scss'
import iv_img from '../imgs/home/table_learning.png'

const Home = () => {
    return (
        <Container className={styles.Home}>
            <Row>
                <h2 className='px-3'>Головна</h2>
            </Row>
            <hr />
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Img variant="top" src={iv_img} />
                        <Card.Body>
                            <Card.Title>Неправильні глаголи по таблицям</Card.Title>
                            <Card.Text>
                                Вивчай ефективно нерпавильні глаголи за катигоріями, або за фільтрами!
                            </Card.Text>
                            <Button variant="primary" href='/irregular_verbs'>Перейти</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            Test
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
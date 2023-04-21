import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <Container className={styles.Home}>
            <Row>
                Description
            </Row>
            <hr/>
            <Row>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            Irregular Verbs
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
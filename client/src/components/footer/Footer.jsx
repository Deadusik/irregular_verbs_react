import React from 'react'
import { Card, Container } from 'react-bootstrap'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <Container fluid className={styles.Footer}>
            <Card>
                <h1>Footer</h1>
            </Card>
        </Container>
    )
}

export default Footer
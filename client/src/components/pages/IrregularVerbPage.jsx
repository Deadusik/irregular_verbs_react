import React, { useContext } from 'react'
import IrregularVerbTable from '../irregular_verbs_table/IrregularVerbsTable';
import { Container, Row, Col, Card } from 'react-bootstrap';
import VerbSearchInput from '../table_controller/VerbSerachInput';
import TableController from '../table_controller/TableController'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
import styles from './IrregularVerbPage.module.scss'
import ExerciseRating from '../exercise_rating/ExerciseRating';
import Comments from '../comments/Comments';

const IrregularVerbPage = observer(() => {
    const { irregularVerbs } = useContext(Context)
    const { generalTable } = useContext(Context)

    return (
        <Container className={styles.Container}>
            <Card>
                <Card.Body>
                    <Row className='d-flex justify-content-between'>
                        <Col className='d-inline-flex py-1' md={4}>
                            <VerbSearchInput />
                        </Col>
                        <Col className='d-inline-flex justify-content-end py-1'>
                            <TableController tableStore={generalTable} />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <IrregularVerbTable
                currentVerbs={irregularVerbs.currentVerbs}
                tableStore={generalTable} />
            <ExerciseRating />
            <div className='mt-3'>
                <Comments />
            </div>
        </Container>
    )
})

export default IrregularVerbPage;
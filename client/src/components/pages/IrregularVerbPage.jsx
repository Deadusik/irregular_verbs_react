import React, { useContext } from 'react'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';
//models
import { Comment } from '../../models/Comment';
import { ParentComment } from '../../models/ParentComment';
// components
import IrregularVerbTable from '../irregular_verbs_table/IrregularVerbsTable';
import VerbSearchInput from '../table_controller/VerbSerachInput';
import TableController from '../table_controller/TableController'
import ExerciseRating from '../exercise_rating/ExerciseRating';
import Comments from '../comments/Comments';
import { Container, Row, Col, Card } from 'react-bootstrap';
// style
import styles from './IrregularVerbPage.module.scss'


const IrregularVerbPage = observer(() => {
    const { irregularVerbs } = useContext(Context)
    const { generalTable } = useContext(Context)
 
    const parentComments = [
        new ParentComment(
            new Comment('User1', 'hello hello hello hello', Date.now()),
            [
                new Comment('User1', 'hello hello hello hello', Date.now()),
                new Comment('User2', 'hello hello hello hello', Date.now()),
                new Comment('User3', 'hello hello hello hello', Date.now()),
            ]
        ),
        new ParentComment(
            new Comment('User5', 'hello hello hello hello', Date.now()),
            [
                new Comment('User1', 'hello hello hello hello', Date.now()),
            ]
        ),
        new ParentComment(
            new Comment('User5', 'hello hello hello hello', Date.now()),
            []
        ),
    ]

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
                <Comments parentComments={parentComments}/>
            </div>
        </Container>
    )
})

export default IrregularVerbPage;
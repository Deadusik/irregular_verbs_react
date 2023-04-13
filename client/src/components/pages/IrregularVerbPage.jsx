import React, { useContext } from 'react'
import IrregularVerbTable from '../irregular_verbs_table/IrregularVerbsTable';
import { Container, Row, Col } from 'react-bootstrap';
import VerbSearchInput from '../table_controller/VerbSerachInput';
import TableController from '../table_controller/TableController'
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const IrregularVerbPage = observer(() => {
    const { irregularVerbs } = useContext(Context)
    const { generalTable } = useContext(Context)

    return (
        <Container>
            <Row className='d-flex justify-content-between' md={12}>
                <Col md={4} className='d-inline-flex'>
                    <VerbSearchInput />
                </Col>
                <Col className='d-inline-flex justify-content-end'>
                    <TableController tableStore={generalTable} />
                </Col>
            </Row>
            <IrregularVerbTable
                currentVerbs={irregularVerbs.currentVerbs}
                tableStore={generalTable} />
        </Container>
    )
})

export default IrregularVerbPage;
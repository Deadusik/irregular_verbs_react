import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import IrregularVerbForm from '../irregular_verb_form/IrregularVerbFrom';
import TableController from '../table_controller/TableController';

const IrregularVerbTable = ({ irregularVerbs }) => {
    const [isColShow, setIsColShow] = useState([true, true, true, true])

    const toggleShow = (val) => {

    }

    return (
        <>
            <TableController />

            <Table className='mt-2' striped bordered hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Переклад</th>
                        <th>1 форма</th>
                        <th>2 форма</th>
                        <th>3 форма</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        irregularVerbs.map(verb => <tr>
                            <td style={
                                {
                                    background: verb.colorRarity
                                }
                            }>
                            </td>
                            <td>
                                {verb.translate}
                            </td>
                            {
                                verb.verbs.map(
                                    verbFrom => <td>
                                        <IrregularVerbForm
                                            name={verbFrom.name}
                                            transcription={verbFrom.transcription}
                                            soundPath={verbFrom.soundPath} />
                                    </td>
                                )
                            }
                        </tr>)
                    }
                </tbody>
            </Table>
        </>
    )
}

export default IrregularVerbTable;
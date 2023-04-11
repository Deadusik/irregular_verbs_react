import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import IrregularVerbForm from '../irregular_verb_form/IrregularVerbFrom';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';

const IrregularVerbsTable = observer(({ currentVerbs }) => {

    const { irregularVerbsTable } = useContext(Context)

    const checkIsVerbHide = (verb) => {
        if (verb.form === 'v1')
            return !irregularVerbsTable.isHideV1Col
        else if (verb.form === 'v2')
            return !irregularVerbsTable.isHideV2Col
        else if (verb.form === 'v3')
            return !irregularVerbsTable.isHideV3Col

        return false
    }

    return (
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
                    currentVerbs.map((verbRow, index) =>
                        /* table row item */
                        <tr key={index}>
                            { /* Row color rarity */}
                            <td style={
                                {
                                    background: verbRow.colorRarity
                                }
                            }>
                            </td>
                            { /* Row translate */}
                            <td>
                                {
                                    !irregularVerbsTable.isHideTranslateCol
                                    &&
                                    verbRow.translate
                                }
                            </td>
                            {
                                /* Row irregular verbs */
                                verbRow.verbs.map(
                                    (verbItem, index) =>
                                        <td key={index}>
                                            {
                                                checkIsVerbHide(verbItem)
                                                &&
                                                < IrregularVerbForm
                                                    name={verbItem.name}
                                                    transcription={verbItem.transcription}
                                                    soundPath={verbItem.soundPath} />
                                            }
                                        </td>
                                )
                            }
                        </tr>)
                }
            </tbody>
        </Table>
    )
})

export default IrregularVerbsTable;
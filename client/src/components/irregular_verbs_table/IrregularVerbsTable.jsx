import React from 'react'
import { Table } from 'react-bootstrap'
import IrregularVerbForm from '../irregular_verb_form/IrregularVerbFrom';
import { observer } from 'mobx-react-lite';
import styles from './IrregularVerbsTable.module.scss'

const IrregularVerbsTable = observer(({ currentVerbs, tableStore }) => {
    const checkIsVerbHide = (verb) => {
        if (verb.form === 'v1')
            return !tableStore.isHideV1Col
        else if (verb.form === 'v2')
            return !tableStore.isHideV2Col
        else if (verb.form === 'v3')
            return !tableStore.isHideV3Col

        return false
    }

    return (
        <Table className='mt-2' striped bordered hover>
            <thead>
                <tr>
                    <th></th>
                    <th className={styles.TranslateTitle}>Переклад</th>
                    <th className={styles.FormTitle}>1 форма</th>
                    <th className={styles.FormTitle}>2 форма</th>
                    <th className={styles.FormTitle}>3 форма</th>
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
                            <td className={styles.Translate}>
                                {
                                    !tableStore.isHideTranslateCol
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
                                                <IrregularVerbForm
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
        </Table >
    )
})

export default IrregularVerbsTable;
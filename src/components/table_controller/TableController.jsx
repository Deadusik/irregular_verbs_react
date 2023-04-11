import React, { useContext } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { Context } from '../../index'
import { observer } from 'mobx-react-lite';
import styles from './TableController.module.scss'

const TableController = observer(() => {
    const { irregularVerbsTable } = useContext(Context)

    const hideTranslateCol = () =>
        irregularVerbsTable.setIsHideTranslateCol(!irregularVerbsTable.isHideTranslateCol)

    const hideV1Col = () =>
        irregularVerbsTable.setIsHideV1Col(!irregularVerbsTable.isHideV1Col)

    const hideV2Col = () =>
        irregularVerbsTable.setIsHideV2Col(!irregularVerbsTable.isHideV2Col)

    const hideV3Col = () =>
        irregularVerbsTable.setIsHideV3Col(!irregularVerbsTable.isHideV3Col)

    return (
        <ToggleButtonGroup type="checkbox" className={styles.TableController}>
            <ToggleButton id="translate"
                onClick={hideTranslateCol}
                value={1}
                variant='primary'>
                Переклад
            </ToggleButton>
            <ToggleButton id="v1"
                onClick={hideV1Col}
                value={2}
                variant='success'>
                1 Форма
            </ToggleButton>
            <ToggleButton id="v2"
                onClick={hideV2Col}
                value={3}
                variant='success'>
                2 Форма
            </ToggleButton>
            <ToggleButton id="v3"
                onClick={hideV3Col}
                value={4}
                variant='success'>
                3 Форма
            </ToggleButton>
        </ToggleButtonGroup>
    )
})

export default TableController;
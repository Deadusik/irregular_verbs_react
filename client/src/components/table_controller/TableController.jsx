import React from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import { observer } from 'mobx-react-lite';
import styles from './TableController.module.scss'

const TableController = observer(({ tableStore }) => {
    const hideTranslateCol = () =>
        tableStore.setIsHideTranslateCol(!tableStore.isHideTranslateCol)

    const hideV1Col = () =>
        tableStore.setIsHideV1Col(!tableStore.isHideV1Col)

    const hideV2Col = () =>
        tableStore.setIsHideV2Col(!tableStore.isHideV2Col)

    const hideV3Col = () =>
        tableStore.setIsHideV3Col(!tableStore.isHideV3Col)

    return (
        <ToggleButtonGroup type="checkbox">
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
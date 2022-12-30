import React, { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

const TableController = (callback) => {
    const [value, setValue] = useState([1, 4]);

    const handleChange = (val) => {
        setValue(val);
        callback(val);
    };

    return (
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
            <ToggleButton id="tbg-btn-1" value={1}>
                Переклад
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
                1 Форма
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value={3}>
                2 Форма
            </ToggleButton>
            <ToggleButton id="tbg-btn-4" value={4}>
                3 Форма
            </ToggleButton>
        </ToggleButtonGroup>
    )
}

export default TableController;
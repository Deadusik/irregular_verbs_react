import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CRUD_DropDown = ({ subjectName, pathName }) => {
    return (
        <>
            <DropdownButton
                id={`dropdown-button-drop-${`start`}`}
                drop={`start`}
                title={`${subjectName}`}
                className='px-3 w-100'
                variant='light'
            >
                <Dropdown.Item eventKey="1">Створити</Dropdown.Item>
                <Dropdown.Item eventKey="2">Редагувати</Dropdown.Item>
                <Dropdown.Item eventKey="3">Видалити</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default CRUD_DropDown
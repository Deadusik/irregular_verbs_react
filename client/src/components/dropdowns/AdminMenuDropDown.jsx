import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaKey } from 'react-icons/fa'
import CRUD_DropDown from './CRUD_DropDown';

const UserMenuDropDown = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    <FaKey />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <CRUD_DropDown subjectName={'Глагол'} />
                    <Dropdown.Divider />
                    <CRUD_DropDown subjectName={'Строка таблиці'} />
                    <Dropdown.Divider />
                    <CRUD_DropDown subjectName={'Юзер'} />
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserMenuDropDown
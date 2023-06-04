import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { FaUser } from 'react-icons/fa'

const UserMenuDropDown = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    <FaUser />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Профіль</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Вийти</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default UserMenuDropDown
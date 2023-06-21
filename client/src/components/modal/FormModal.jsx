import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const FormModal = ({ show, setShow, title, content }) => {
    const handleClose = () => setShow(!show);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {content}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Закрити</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default FormModal
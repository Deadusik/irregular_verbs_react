import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const SimpleModal = ({ show, setShow, title, content }) => {
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
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleClose}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SimpleModal
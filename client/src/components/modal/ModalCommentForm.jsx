import React from 'react'
import { Modal, Button, Form, Row, Container, InputGroup } from 'react-bootstrap'
//react bootstrap icons
import { AiOutlineUser } from 'react-icons/ai'
import { BsChatLeftText } from 'react-icons/bs'

const ModalCommentForm = ({show, setShow}) => {
    const handleClose = () => setShow(!show);

    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Додати коментар</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form>
              <Row>
                <InputGroup>
                  <InputGroup.Text>
                    <AiOutlineUser/>
                  </InputGroup.Text>
                  <Form.Control type='text' placeholder='Ваш нік'/>
                </InputGroup>
              </Row>
              <Row className='mt-2'>
                <InputGroup>
                  <InputGroup.Text>
                    <BsChatLeftText/>
                  </InputGroup.Text>
                  <Form.Control as="textarea" aria-label="With textarea" placeholder='Ваше повідомлення' />
                </InputGroup>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default ModalCommentForm
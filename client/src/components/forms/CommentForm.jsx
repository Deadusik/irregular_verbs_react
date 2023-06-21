import React from 'react'
import { Form, Row, InputGroup, Button } from 'react-bootstrap'
//react bootstrap icons
import { AiOutlineUser } from 'react-icons/ai'
import { BsChatLeftText } from 'react-icons/bs'

const CommentForm = () => {
    return (
        <Form>
            <Row>
                <InputGroup>
                    <InputGroup.Text>
                        <AiOutlineUser />
                    </InputGroup.Text>
                    <Form.Control type='text' placeholder='Ваш нік' />
                </InputGroup>
            </Row>
            <Row className='mt-2'>
                <InputGroup>
                    <InputGroup.Text>
                        <BsChatLeftText />
                    </InputGroup.Text>
                    <Form.Control as="textarea" aria-label="With textarea" placeholder='Ваше повідомлення' />
                </InputGroup>
            </Row>
            <Row className='d-flex justify-content-center mt-2 px-2'>
                <Button type='submit' className='w-100' variant="primary">Додати</Button>
            </Row>
        </Form>
    )
}

export default CommentForm
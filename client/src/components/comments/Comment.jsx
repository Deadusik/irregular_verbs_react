import React, {useState} from 'react'
import { Col, Row, Image, Button } from 'react-bootstrap'
import defaultImg from '../../imgs/no_img.png'
import styles from './Comment.module.scss'
import ModalCommentForm from '../modal/ModalCommentForm'

const Comment = ({comment, isLast = false}) => {
    const {userName, text, dateTime} = comment
    const [isShowForm, setIsShowForm] = useState(false)

    return (
        <Row className='d-flex py-3'>
            <Col className='d-inline-flex flex-grow-0'>
                <Image width={100} height={100} src={defaultImg}/>
            </Col>
            <Col>
                <h6>{userName}</h6>
                <p className={styles.CreateTime}>
                    {new Date(dateTime).toLocaleDateString(
                        'uk-UA',
                        {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'}
                        )}
                </p>
                <p>
                    {text}
                </p>
            </Col>
            { 
                isLast && 
                <Col className='d-inline-flex justify-content-end align-items-end flex-grow-0'>
                    <Button variant="outline-info" onClick={() => setIsShowForm(!isShowForm)}>Відповісти</Button>
                </Col>
            }
            <ModalCommentForm show={isShowForm} setShow={setIsShowForm} />
        </Row>
    )
}

export default Comment
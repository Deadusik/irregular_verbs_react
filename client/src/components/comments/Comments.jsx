import React, { useState } from 'react'
import { Card, Row, Button, Col, Modal } from 'react-bootstrap'
import Comment from './Comment'
import styles from './Comments.module.scss'
import CommentForm from '../forms/CommentForm'
import SimpleModal from '../modal/SimpleModal'

const Comments = ({ parentComments }) => {
    const checkIsLastComment = (index, length) => index === length - 1

    const getTotalSize = () => {
        let totalSize = parentComments.length
        parentComments.forEach(item => totalSize += item.childComments.length)
        return totalSize
    }

    const [isShowModalComment, setIsShowModalComment] = useState(false)

    return (
        <Card>
            <Card.Body className='px-4'>
                <h4>Коментарі до вправи</h4>
                <hr />
                <Row className='d-flex flex-column'>
                    <h6>Всього коментарів: {getTotalSize()}</h6>
                    {
                        parentComments.map((item, i) => {
                            const { comment, childComments } = item

                            return (
                                <Col key={comment.userName + i}>
                                    { /* parent comment */}
                                    <Comment comment={comment} isLast={childComments.length === 0} />
                                    <hr />
                                    {
                                        childComments.map((childComment, j) =>
                                            <Col key={childComment.userName + j}
                                                className={styles.ChildComment}>
                                                <Comment
                                                    comment={childComment}
                                                    isLast={checkIsLastComment(j, childComments.length)} />
                                                <hr />
                                            </Col>
                                        )
                                    }
                                </Col>
                            )
                        })
                    }
                </Row>
                {/* Show modal form to add a new comment */}
                <Button variant='danger' onClick={() => setIsShowModalComment(true)}>Залишити коментар</Button>
                <SimpleModal
                    title={'Додати коментар'}
                    content={<CommentForm />}
                    show={isShowModalComment}
                    setShow={setIsShowModalComment} />
                <hr />
                <Row className='d-flex justify-content-center'>
                    <Button variant='dark' className={styles.MoreButton}>Ще коментарі</Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Comments
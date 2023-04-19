import React from 'react'
import { Card, Row, Button, Col } from 'react-bootstrap'
import Comment from './Comment'
import styles from './Comments.module.scss'

const Comments = ({parentComments}) => {
    const checkIsLastComment = (index, length) =>  index === length - 1

    const getTotalSize = () => {
        let totalSize = parentComments.length
        parentComments.forEach(item => totalSize += item.childComments.length)
        return totalSize
    }

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
                                    <Comment comment={comment} isLast={childComments.length === 0}/>
                                    <hr/>
                                    {
                                        childComments.map((childComment, j) => 
                                            <Col key={childComment.userName + j} 
                                                className={styles.ChildComment}>
                                                <Comment 
                                                    comment={childComment}
                                                    isLast={checkIsLastComment(j, childComments.length)}/>
                                                <hr/>
                                            </Col>
                                        )
                                    }
                                </Col>
                            )
                        })
                    }
                </Row>
                <Button variant='danger'>Залишити коментар</Button>
                <hr/>
                <Row className='d-flex justify-content-center'>
                    <Button variant='dark' className={styles.MoreButton}>Ще коментарі</Button>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Comments
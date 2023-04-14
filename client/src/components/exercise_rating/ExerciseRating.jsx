import React, { useState } from 'react'
import { Card, Row } from 'react-bootstrap'
import { IoStarOutline, IoStarSharp, IoStarHalfOutline } from 'react-icons/io5';
import styles from './ExerciseRating.module.scss'

const ExerciseRating = ({ rating = 2.5, countUsers = 0 }) => {
    const DEFAULT_STARS_STATE = [false, false, false, false, false]
    const [stars, setStars] = useState(DEFAULT_STARS_STATE)
    const [isSetRating, setIsSetRating] = useState(false)
    const DARK_YELLOW = '#ac8100'
    const YELLOW = '#ffbf00'

    const changeStars = (number) =>
        stars.map((star, index) => index <= number ? true : false)

    const drawGeneralRating = () => {
        const generalStars = []

        for (let i = rating; i > 0; i--) {
            if (i < 1 && i > 0) {
                generalStars.push(
                    <IoStarHalfOutline
                        key={Date.now() + Math.round(i)}
                        className={styles.Star}
                        fill={DARK_YELLOW} />
                )
            }
            else if (i > 0) {
                generalStars.push(
                    <IoStarSharp
                        key={Date.now() + Math.round(i)}
                        className={styles.Star}
                        fill={DARK_YELLOW} />)
            }
        }

        return generalStars
    }

    return (
        <Card>
            <Card.Body className='px-4'>
                <h4>Оцініть тренажер дієслів</h4>
                <hr />
                <Row className='d-flex'>
                    <div className='d-inline-flex w-auto'>
                        <h2 className={styles.Rating}>{rating}</h2>
                    </div>
                    <Row className='d-inline-flex position-relative w-auto p-0'>
                        { /* FROM RATING */}
                        <div className={styles.UserRating}>
                            {
                                stars.map((item, index) => item ?
                                    <IoStarSharp key={Date.now() + index}
                                        className={styles.Star}
                                        fill={YELLOW}
                                        onMouseLeave={() => !isSetRating && setStars(DEFAULT_STARS_STATE)}
                                        onClick={() => setIsSetRating(true)} />
                                    :
                                    <IoStarOutline key={Date.now() + index}
                                        className={styles.Star}
                                        onMouseEnter={() => !isSetRating && setStars(changeStars(index))}
                                    />)
                            }
                        </div>
                        { /* USERS RATING */}
                        <div className={styles.GeneralRating}>
                            {
                                drawGeneralRating()
                            }
                        </div>
                        <p>Оцінили: {countUsers} чол.</p>
                    </Row>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ExerciseRating
import { FC } from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import Button from 'components/ui/button'
import Label from 'components/ui/label'
import Badge from 'components/ui/badge'
import { BTN_DELETE_TEXT, BTN_EDIT_TEXT } from 'lib/constants/Card'
import { Room } from 'lib/@types/common'
interface CardProps extends Room {
    onDelete: () => void;
    onStatusChange: () => void;
}

const Card: React.FC<CardProps> = ({ _id, title, description, imageURL, desks, isBooked, onDelete, onStatusChange }) => {
    return (
        <div className={styles.wrapper}>
            <img
                className={`${styles.wrapper__image} ${isBooked ? styles.wrapper__image__grey : ''}`}
                src={imageURL}
            />
            <div className={styles.wrapper__description}>
                <Label type='card-title' test-dataid={"card-title"} children={title} />
                <p className={styles.wrapper__description__text}>{description}</p>
                <Badge type={isBooked ? "isBooked" : "Free"} />
                {desks > 0 && (<p>Desks: {desks}</p >)}
            </div>
            <div className={styles.wrapper__actions}>
                <div className={styles.wrapper__actions__controls}>
                    <Button buttonText={BTN_EDIT_TEXT} className={styles.wrapper__actions__controls__edit}></Button>
                    <Button buttonText={BTN_DELETE_TEXT} className={styles.wrapper__actions__controls__delete} onClick={onDelete}></Button>
                </div>
                {(!desks) && (<Button buttonText={isBooked ? "cancel booking" : "book"} className={styles.wrapper__actions__controls__booking} onClick={onStatusChange}></Button>)}
            </div>
        </div >
    )
}
export default Card;
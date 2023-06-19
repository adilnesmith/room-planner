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
                src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Flicensed-image%3Fq%3Dtbn%3AANd9GcRjixVGPm3CTkLwm48wHT_Cop3mDrARsPPpSc4VjWZ0Uett4LDypWWlrHVtkte-Rm0CsRtb6BOQKAXvAFo&psig=AOvVaw0kwx-FYsdfJ9VMt7OrtQLe&ust=1687157470365000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKibn7-dzP8CFQAAAAAdAAAAABAE"}
                alt="Picture of the author"
            />
            <div className={styles.wrapper__description}>
                <Label type='card-title' test-dataid={"card-title"} children={title} />
                <p className={styles.wrapper__description__text}>{description}</p>
                <Badge type={isBooked ? "isBooked" : "Free"} />
                {desks && (<p>Desks: {desks}</p >)}
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
import { FC } from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import Button from 'components/ui/button'
import Label from 'components/ui/label'
import Badge from 'components/ui/badge'
import { BTN_DELETE_TEXT, BTN_EDIT_TEXT } from 'lib/constants/Card'
const Card: FC = () => {
    let description = "asdad";
    let desks = 2;
    let cardTitle = "lorem ipsum";
    return (
        <div className={styles.wrapper}>
            <Image
                className={styles.wrapper__image}
                src="/profile.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />
            <div className={styles.wrapper__description}>
                <Label type='card-title' test-dataid={"card-title"} children={cardTitle} />
                <p>{description}</p>
                <Badge type={"booked"} />
                <p>Desks: {desks}</p >
            </div>
            <div className={styles.wrapper__actions}>
                <div className={styles.wrapper__actions__controls}>
                    <Button buttonText={BTN_EDIT_TEXT} className={styles.wrapper__actions__controls__edit}></Button>
                    <Button buttonText={BTN_DELETE_TEXT}></Button>
                </div>
                <Button buttonText={"cancel booking"} className={styles.wrapper__actions__controls__booking}></Button>
            </div>

        </div >
    )
}
export default Card;
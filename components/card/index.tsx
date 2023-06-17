import { FC } from 'react'
import styles from './Card.module.scss'
import Image from 'next/image'
import Button from 'components/ui/button'
import Label from 'components/ui/label'
import Badge from 'components/ui/badge'
const Card: FC = ({ }) => {
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
                <Label type='card' test-dataid={"card-label"} children={"Sample"} />
                <p>description</p>
                <Badge type={"booked"} />
                <p>Desks: 4</p >
            </div>
            <div className={styles.wrapper__actions}>
                <div className={styles.wrapper__actions__controls}>
                    <Button buttonText={"edit"} className={styles.wrapper__actions__controls__edit}></Button>
                    <Button buttonText={"delete"}></Button>
                </div>
                <Button buttonText={"cancel booking"} className={styles.wrapper__actions__controls__booking}></Button>
            </div>

        </div >
    )
}
export default Card;
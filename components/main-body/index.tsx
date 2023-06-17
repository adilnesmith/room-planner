import { FC, useState } from 'react';
import { MainBodyProps } from 'lib/@types/common'
import styles from './MainBody.module.scss'
import Card from 'components/card';
const MainBody: FC<MainBodyProps> = ({ }) => {
    return (
        <div className={styles.wrapper} >
            <Card />
        </div>
    )
}
export default MainBody;
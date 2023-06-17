import { FC, useState } from 'react';
import { MainBodyProps } from 'lib/@types/common'
import styles from './MainBody.module.scss'
import DetailPanel from './detail-panel'
const MainBody: FC<MainBodyProps> = ({ }) => {
    return (
        <div className={styles.wrapper} >
            <DetailPanel />
        </div>
    )
}
export default MainBody;
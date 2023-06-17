import { FC } from 'react'
import { HeaderProps } from 'lib/@types/common'
import { PAGE_TITLE } from 'lib/constants/Header';
import styles from './Header.module.scss'

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{PAGE_TITLE}</h1>
        </header >
    )
}
export default Header;
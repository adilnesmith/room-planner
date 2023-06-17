import { FC } from 'react'
import { HeaderProps } from 'lib/@types/common'
import { NAVIGATION } from 'lib/constants/Header';
import styles from './Header.module.scss'

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.wrapper}>
            <nav data-testid="navigation" className={styles.wrapper__columns__navigation}>{NAVIGATION}</nav>
        </header >
    )
}
export default Header;
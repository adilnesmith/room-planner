import { FC } from 'react'
import { HeaderProps } from 'lib/@types/common'
import { PAGE_TITLE } from 'lib/constants/Header';
import styles from './Header.module.scss'
import Label from 'components/ui/label';
import Button from 'components/ui/button';
import Search from 'components/ui/search';

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{PAGE_TITLE}</h1>
            <div className={styles.header__actions}>
                <Label type='header' test-dataid={"header-label"} children={"Rooms"} className={styles.header__actions__label} />
                <Button buttonText={"Create New Room"} className={styles.header__actions__button}></Button>
            </div>
            <Search test-dataid={"search"} placeholder='Search' />
        </header >
    )
}
export default Header;
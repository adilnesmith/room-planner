import { FC } from 'react'
import { HeaderProps } from 'lib/@types/common'
import { PAGE_TITLE, PAGE_SUBTITLE, HEADER_BTN_TEXT, SEARCH_PLACEHOLDER } from 'lib/constants/Header';
import styles from './Header.module.scss'
import Label from 'components/ui/label';
import Button from 'components/ui/button';
import Search from 'components/ui/search';

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <header className={styles.header}>
            <h1 className={styles.header__title}>{PAGE_TITLE}</h1>
            <div className={styles.header__actions}>
                <Label type='subtitle' test-dataid={"subtitle"} children={PAGE_SUBTITLE} className={styles.header__actions__subtitle} />
                <Button buttonText={HEADER_BTN_TEXT} className={styles.header__actions__button}></Button>
            </div>
            <Search test-dataid={"search"} placeholder={SEARCH_PLACEHOLDER} />
        </header >
    )
}
export default Header;
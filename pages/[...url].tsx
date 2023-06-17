import { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import Header from 'components/common/header'
import MainBody from 'components/main-body'
const CustomPage: FC<any> = () => {
    return (
        <>
            <Header />
            <MainBody />
        </>
    )
}
export default CustomPage;

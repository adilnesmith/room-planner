import { FC } from 'react';
import { GetStaticPaths, GetStaticProps, GetServerSideProps } from 'next'
import Header from 'components/common/header'
import MainBody from 'components/main-body'
import Footer from 'components/common/footer'
const CustomPage: FC<any> = () => {
    return (
        <>
            <Header />
            <MainBody />
            <Footer />
        </>
    )
}
export default CustomPage;

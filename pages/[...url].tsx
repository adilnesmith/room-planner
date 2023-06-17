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

export const getStaticPaths: GetStaticPaths = (context) => {

    return {
        paths: [], fallback: "blocking"
    }
}
export const getStaticProps: GetStaticProps = (context) => {
    return {
        props: {},
        revalidate: 5
    }

}
// export const getServerSideProps: GetServerSideProps = async (context) => {
//     return {
//         props: {

//         }
//     }
// }
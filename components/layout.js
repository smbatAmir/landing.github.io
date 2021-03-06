import Head from 'next/head'
import styles from '../styles/layout.module.css'
import Footer from "./Home/footer";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Layouts Example</title>
            </Head>
            <main className={styles.main}>{children}</main>
            <Footer />

        </>
    )
}
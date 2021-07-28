import Link from 'next/link'
import Image from 'next/image'

import styles from './sidebar.module.css'
import logo from '../public/ura_logo_main.png'


export default function Sidebar() {
    const clear = {
        'clear':'both',
    }
    return (
        <>
            <div className={styles.header}>

                <div className={styles.logoArea}>
                    <Image className={styles.logo} src={logo} alt="Picture of the author" />

                </div >
                <nav className={styles.nav}>


                    {/*<input className={styles.input} placeholder="Search..." />*/}
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </nav>
                <div className={styles.loginarea}>

                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                   <a className={styles.join}>
                       Join Urrra!
                   </a>
                </div>
            </div>
            <div style={clear}></div>
        </>
    )
}
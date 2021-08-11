import Image from 'next/image'
import styles from './sidebar.module.css'
import {Container, Grid} from "@material-ui/core";
import logo from "../public/ura_logo_main.png";
import Link from "next/link";

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";
import CustomizedMenus from "./mobileSidebar";
import React from "react";
import { useRouter } from 'next/router';
import {FaCircle} from "@react-icons/all-files/fa/FaCircle";


 function Sidebar(props) {
     const router = useRouter()

     const forHeaderSt = {
         position: 'sticky',
         top: '0',
         background: '#fff',
         zIndex: '85'
     }
     console.log(router.pathname)

     // const fontIcon = {
     //     fontSize:"10px",
     //     color:'#fff'
     //
     // }
    if (isWidthUp('md', props.width)) {
        return (
            <Container style={forHeaderSt}>
                <Grid container className={styles.header}>
                    <Grid column item md={1} spacing={3}>
                        <Link href="/">
                            <a>
                                <Image className={styles.logo} src={logo} alt="Picture of the author"/>

                            </a>
                        </Link>
                    </Grid>
                    <Grid column item md={8} spacing={3}>
                        <nav className={styles.navBar}>
                            <Link href="/benefit" >
                                <a >
                                     <span  className={router.pathname == "/benefit" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle />
                                     </span>
                                    Benefits</a>
                            </Link>
                            <Link href="/news" >
                                 <a>
                                     <span  className={router.pathname == "/news" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle />
                                     </span>
                                     News</a>
                            </Link>
                            <Link href="/faq">
                                <a>
                                     <span  className={router.pathname == "/faq" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle />
                                     </span>
                                    FAQ</a>
                            </Link>
                            <Link href="/contact">
                                <a>
                                     <span  className={router.pathname == "/contact" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle />
                                     </span>
                                    Contacts</a>
                            </Link>
                        </nav>
                    </Grid>
                    <Grid column item md={3} spacing={3} className={styles.leftMen}>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                        <a className={styles.join}>
                            <span>Join Urrra!</span>
                        </a>
                    </Grid>

                </Grid>
            </Container>
        )
    }else{
        return (
            <Container style={forHeaderSt}>
                <Grid container className={styles.header}>
                    <Grid column item lg={1} md={1} sm={6} xs={6} spacing={3}>
                        <Link href="/">
                            <a>
                                <Image className={styles.logo} src={logo} alt="Picture of the author"/>

                            </a>
                        </Link>

                    </Grid>
                    <Grid column item lg={8} md={8} sm={1} xs={1} spacing={3}>
                        {/*<nav className={styles.navBar}>*/}


                        {/*    /!*<input className={styles.input} placeholder="Search..." />*!/*/}
                        {/*    <Link href="/">*/}
                        {/*        <a>Home</a>*/}
                        {/*    </Link>*/}
                        {/*    <Link href="/about">*/}
                        {/*        <a>About</a>*/}
                        {/*    </Link>*/}
                        {/*    <Link href="/contact">*/}
                        {/*        <a>Contact</a>*/}
                        {/*    </Link>*/}
                        {/*</nav>*/}
                    </Grid>
                    <Grid column item lg={3} md={3} sm={5} xs={5} spacing={3} className={styles.leftMen}>
                        {/*< GiHamburgerMenu />*/}
                        < CustomizedMenus />
                    </Grid>

                </Grid>
            </Container>
        )
    }
}
export default withWidth()(Sidebar);

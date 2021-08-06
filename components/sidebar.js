import Image from 'next/image'
import styles from './sidebar.module.css'
import {Container, Grid} from "@material-ui/core";
import logo from "../public/ura_logo_main.png";
import Link from "next/link";

import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";
import CustomizedMenus from "./mobileSidebar";



 function Sidebar(props) {
    if (isWidthUp('sm', props.width)) {
        return (
            <Container>
                <Grid container className={styles.header}>
                    <Grid column item md={1} spacing={3}>
                        <Image className={styles.logo} src={logo} alt="Picture of the author"/>

                    </Grid>
                    <Grid column item md={8} spacing={3}>
                        <nav className={styles.navBar}>


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
            <Container>
                <Grid container className={styles.header}>
                    <Grid column item sm={1} spacing={3}>
                        <Image className={styles.logo} src={logo} alt="Picture of the author"/>

                    </Grid>
                    <Grid column item sm={8} spacing={3}>
                        <nav className={styles.navBar}>


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
                    </Grid>
                    <Grid column item md={3} spacing={3} className={styles.leftMen}>
                        {/*< GiHamburgerMenu />*/}
                        < CustomizedMenus />
                    </Grid>

                </Grid>
            </Container>
        )
    }
}
export default withWidth()(Sidebar);

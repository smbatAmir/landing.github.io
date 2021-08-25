import Image from 'next/image'
import styles from './sidebar.module.css'
import {Container, Grid} from "@material-ui/core";
import logo from "../public/ura_logo_main.png";
import Link from "next/link";
import {createTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

import withWidth, {isWidthUp} from '@material-ui/core/withWidth';
import {GiHamburgerMenu} from "@react-icons/all-files/gi/GiHamburgerMenu";
import CustomizedMenus from "./mobileSidebar";
import React from "react";
import {useRouter} from 'next/router';
import {FaCircle} from "@react-icons/all-files/fa/FaCircle";
import TextField from "@material-ui/core/TextField";
import {green} from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({

    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        "& .MuiBackdrop-root": {
            backgroundColor: 'rgba(255,246,240,0.8)',
            backdropFilter: 'blur(28px)'

        }
    },

    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        // boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 4, 3),
        borderRadius: '16px',

    },
}));

function Sidebar(props) {
    const router = useRouter()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const forHeaderSt = {
        position: 'sticky',
        top: '0',
        background: '#fff',
        zIndex: '85',
        boxShadow: '8px 28px 74px rgba(184, 54, 0, 0.06)'

    }
    console.log(router.pathname)

    // const fontIcon = {
    //     fontSize:"10px",
    //     color:'#fff'
    //
    // }
    const theme = createTheme({
        palette: {
            primary: green,
        },
    });
    const inputStyles = {
        marginTop: '15px'
    }
    if (isWidthUp('md', props.width)) {
        return (
            <div style={forHeaderSt} className={styles.navBarWraper}>
                <Container>
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
                                <Link href="/benefit">
                                    <a>
                                     <span
                                         className={router.pathname == "/benefit" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle/>
                                     </span>
                                        Benefits</a>
                                </Link>
                                <Link href="/news">
                                    <a>
                                     <span
                                         className={router.pathname == "/news" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle/>
                                     </span>
                                        News</a>
                                </Link>
                                <Link href="/faq">
                                    <a>
                                     <span
                                         className={router.pathname == "/faq" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle/>
                                     </span>
                                        FAQ</a>
                                </Link>
                                <Link href="/contact">
                                    <a>
                                     <span
                                         className={router.pathname == "/contact" ? styles.activeLink : styles.inactiveLink}>
                                         <FaCircle/>
                                     </span>
                                        Contacts</a>
                                </Link>
                            </nav>
                        </Grid>
                        <Grid column item md={3} spacing={3} className={styles.leftMen} style={{textAlign: 'end'}}>
                        <span onClick={handleOpen} style={{cursor: "pointer"}}>
                            <a>Login</a>
                        </span>
                            <Link href='/joinurrra'>
                                <a className={styles.join}>
                                    <span>Join Urrra!</span>
                                </a>
                            </Link>

                        </Grid>

                    </Grid>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                            <div className={classes.paper}>
                                <Grid container>

                                    <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3}>
                                        <h2 id="server-modal-title">Log in</h2>

                                    </Grid>
                                </Grid>
                                <ThemeProvider theme={theme}>
                                    {/*<div className={styles.line}></div>*/}

                                    <TextField style={inputStyles}
                                               className={classes.margin}
                                        // className={classes.margin}
                                               label="Your email"
                                               variant="outlined"
                                               id="email"
                                               type="email"
                                               fullWidth='true'
                                    />
                                    <TextField style={inputStyles}
                                               className={classes.margin}
                                        // className={classes.margin}
                                               label="Your password"
                                               variant="outlined"
                                               id="password"
                                               fullWidth='true'
                                               type="password"
                                    />
                                    <Button style={{
                                        background: ' #FF6600',
                                        borderRadius: '28px',
                                        color: '#fff',
                                        marginTop: '15px',
                                        height: '54px'
                                    }} variant="contained" color="primary" fullWidth='true' disableElevation>
                                        log in
                                    </Button>
                                </ThemeProvider>
                                <Grid container>

                                    <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3} align='end'>
                                        <Link href="">
                                            <a style={{textDecoration: "none", color: '#272744', fontSize: '14px'}}>
                                                <p>forgot password?</p>
                                            </a>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Fade>
                    </Modal>
                </Container>
            </div>
        )
    } else {
        return (
            <div style={forHeaderSt}>
                <Container>
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
                            < CustomizedMenus/>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        )
    }
}

export default withWidth()(Sidebar);

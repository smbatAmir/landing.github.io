import styles from './section2.module.css'
import Image from "next/image";

import section2leftbar from "../../public/sectionImages/cross_platform_devices.png";
import appStore from "../../public/sectionImages/appStore.png";
import googleStore from "../../public/sectionImages/googleStore.png";
import webSites from "../../public/sectionImages/website.png";
import ChromeWtext from "../../public/sectionImages/ChromWtext.png";
import SafariWtext from "../../public/sectionImages/safariWtext.png";

import {Container, Grid} from "@material-ui/core";
import React from 'react';
import Fade from 'react-reveal/Fade';
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";

export default function Section2() {
    return (
        <Container>

             <Grid container >

                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                    <Fade left >
                        <Image className={styles.sectinoImages} src={section2leftbar} alt="Picture of the author" />
                    </Fade>
                </Grid>

                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                    <Fade cascade  right  >
                    <h2 className={styles.sectionTitle}>Uraaa! is Cross-Platform</h2>
                    <div className={styles.line}></div>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
                        Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    <Grid container >
                        <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3}>
                            <p className={styles.storeIconInfo}>Mobile app:</p>
                        </Grid>
                        <Grid column item lg={6} md={8} sm={12} xs={12}  spacing={3}>
                            <Grid container >
                                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                                    <div className={styles.storeIcon}>
                                        <Image  src={appStore} alt="Picture of the app store" />
                                    </div>
                                </Grid>
                                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                                    <div className={styles.storeIcon}>
                                        <Image  src={googleStore} alt="Picture of the google store" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid container >
                        <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3}>
                            <p className={styles.storeIconInfo}>Website:</p>
                        </Grid>
                        <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3} className={styles.webSitesIconArea}>
                            <Grid container >
                                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3} >
                                    <Image  src={webSites} alt="Picture of the web Site" />
                                </Grid>
                                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                                    <p className={styles.WebSitestext}>www.uraaa.com</p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3}>
                            <p className={styles.storeIconInfo}>Web extension:</p>
                        </Grid>
                        <Grid column item lg={6} md={8} sm={12} xs={12}  spacing={3}>
                            <Grid container >
                                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                                    <div className={styles.brIcon}>
                                        <Image  src={ChromeWtext} alt="Picture of the Chrome Icon" />
                                    </div>
                                </Grid>
                                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                                    <div className={styles.brIcon}>
                                        <Image  src={SafariWtext} alt="Picture of the Safari Icon" />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>

                </Grid>
                    </Fade>

                </Grid>

            </Grid>
        </Container>

    )
}
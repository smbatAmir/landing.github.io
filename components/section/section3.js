import styles from './section3.module.css'
import Image from "next/image";
import section3RightBar from "../../public/sectionImages/web_extension_lapto.png";
import {Container, Grid} from "@material-ui/core";
import section3 from "../../public/sectionImages/section3b.png";
import TransitionsModal from "./modalVideo";
import Fade from "react-reveal/Fade";
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChromeWtext from "../../public/sectionImages/ChromWtext.png"; // You can also use <link> for styles
import SafariWtext from "../../public/sectionImages/SafariWtext.png"; // You can also use <link> for styles

export default function Section3({homeData}) {
    console.log("homeData__3 ______________________", homeData);

    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (

        <Container className={styles.section3Container}>
            <Grid container>
                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <div data-aos="fade-right">
                        <Image src={section3} alt="Picture of the author"/>
                    </div>
                </Grid>
                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <div data-aos="fade-left">
                        <h2 className={styles.sectionTitle}>Grab Buyers</h2>
                        <h3 className={styles.sectionSubTitle}>Lorem Ipsum</h3>
                        <h4 className={styles.textTitle}>{homeData.title}</h4>
                        <p>{homeData.text}</p>

                        <p className={styles.textDescription} dangerouslySetInnerHTML={{__html: homeData.text}}/>

                        {/*<p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply*/}
                        {/*    random text.*/}
                        {/*    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years*/}
                        {/*    old.*/}
                        {/*    Contrary to popular belief, Lorem Ipsum is not simply random text.</p>*/}
                        < TransitionsModal
                            videoURL={'https://www.youtube.com/watch?v=xT65UQM0e-Y'}
                        />
                        {/*<p className={styles.webExtension}>Web extension:</p>*/}
                        <Grid container>
                            <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3}>
                                <p className={styles.storeIconInfo}>Web extension:</p>
                            </Grid>
                            <Grid column item lg={6} md={8} sm={12} xs={12} spacing={3}>
                                <Grid container>
                                    <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                                        <div className={styles.brIcon}>
                                            <Image src={ChromeWtext} alt="Picture of the Chrome Icon"/>
                                        </div>
                                    </Grid>
                                    <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                                        <div className={styles.brIcon}>
                                            <Image src={SafariWtext} alt="Picture of the Safari Icon"/>

                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                    </div>
                </Grid>


            </Grid>
        </Container>

    )
}
import React, {useEffect} from "react";
import styles from '../../styles/section3.module.css'
import Image from "next/image";
import {Container, Grid} from "@material-ui/core/index";
import section3 from "../../public/sectionImages/section3b.png";
import TransitionsModal from "../section/modalVideo";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ChromeWtext from "../../public/sectionImages/ChromWtext.png";
import SafariWtext from "../../public/sectionImages/SafariWtext.png";
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

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
                        <p className={styles.textDescription}>{htmlToReactParser.parse(homeData.text)}</p>

                        <div className={styles.watchVideoWraper}>
                            < TransitionsModal
                                videoURL={'https://www.youtube.com/watch?v=xT65UQM0e-Y'}
                            />
                            <span className={styles.watchVideoText}>See how you benefit by watching the video.</span>
                        </div>

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
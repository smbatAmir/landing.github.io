import React, {useEffect} from "react";
import styles from '../../styles/section4.module.css'
import Image from "next/image";
import {Container, Grid} from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import TransitionsModal from "../section/modalVideo";
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

export default function Section4({homeData}) {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    return (
        <Container className={styles.section4Container}>
            <Grid container>

                {/*<Fade left>*/}
                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <div data-aos="fade-left">
                        <h4 className={styles.textTitle}>{homeData.title}</h4>
                        <p className={styles.textDescription}>{htmlToReactParser.parse(homeData.text)}</p>

                        <div className={styles.watchVideoWraper}>
                            < TransitionsModal
                                videoURL={'https://www.youtube.com/watch?v=xT65UQM0e-Y'}
                            />
                            <span className={styles.watchVideoText}>Watch the video to learn more</span>
                        </div>
                    </div>
                </Grid>

                {/*<Fade right>*/}
                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <div data-aos="fade-right">
                        <Image src="/section4img.png" alt="Picture of the author" width={689} height={570}/>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
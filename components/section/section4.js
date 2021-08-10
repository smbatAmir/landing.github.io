import styles from './section4.module.css'
import Image from "next/image";
import section4leftbar from "../../public/sectionImages/barcode_scan_girl.png";
import {Container, Grid} from "@material-ui/core";
import section2leftbar from "../../public/sectionImages/cross_platform_devices.png";
// import Fade from "react-reveal/Fade";
import React from "react";

export default function Section4() {
    return (
        <Container>
            <Grid container >
                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                    {/*<Fade left>*/}

                    <h4 className={styles.textTitle}>Barcode Scan</h4>
                    <div className={styles.line}></div>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
                        Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    {/*</Fade>*/}
                </Grid>
                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                    {/*<Fade right>*/}

                    <Image className={styles.sectinoImages} src={section4leftbar} alt="Picture of the author" />
                    {/*</Fade>*/}
                </Grid>
            </Grid>
        </Container>

    )
}
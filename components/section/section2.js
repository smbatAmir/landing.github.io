import styles from './section2.module.css'
import Image from "next/image";
import section2leftbar from "../../public/sectionImages/cross_platform_devices.png";
import {Container, Grid} from "@material-ui/core";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";

export default function Section2() {
    return (
        <Container>
            <Grid container >
                <Grid column item sm={6} spacing={3}>
                    <Image className={styles.sectinoImages} src={section2leftbar} alt="Picture of the author" />
                </Grid>
                <Grid column item md={6} spacing={3}>
                    <h2 className={styles.sectionTitle}>Uraaa! is Cross-Platform</h2>
                    <div className={styles.line}></div>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old
                        Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                </Grid>

            </Grid>
        </Container>

    )
}
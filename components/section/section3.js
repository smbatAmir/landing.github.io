import styles from './section3.module.css'
import Image from "next/image";
import section3RightBar from "../../public/sectionImages/web_extension_lapto.png";
import {Container, Grid} from "@material-ui/core";
import section3 from "../../public/sectionImages/section3b.png";

export default function Section3() {
    return (

        <Container>
            <Grid container >
                <Grid column item sm={6} spacing={3}>
                    <h2 className={styles.sectionTitle}>Grab Buyers</h2>
                    <h3 className={styles.sectionSubTitle}>Lorem Ipsum</h3>
                    <div className={styles.line}></div>
                    <h4 className={styles.textTitle}>Web extension</h4>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. <span>Read more</span></p>
                </Grid>
                <Grid column item md={6} spacing={3}>
                    <Image  src={section3} alt="Picture of the author" />
                </Grid>

            </Grid>
        </Container>

    )
}
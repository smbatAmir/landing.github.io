import styles from './section1.module.css'
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";

export default function Section1() {
    return (
        <Container>
        <Grid container >
            <Grid column item sm={6} spacing={3}>
                <h2 className={styles.sectionTitle}>Start Selling</h2>
                <h3 className={styles.sectionSubTitle}>With Uraaa!</h3>
                <div className={styles.line}></div>
                <h4 className={styles.textTitle}>What is Uraaa ?</h4>
                <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                          Contrary to popular belief, Lorem Ipsum is not simply random text. <span>Read more</span></p>
            </Grid>
            <Grid column item md={6} spacing={3}>
                <Image  src={section1RightBar} alt="Picture of the author" />
            </Grid>

        </Grid>
        </Container>
    )
}
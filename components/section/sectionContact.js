import styles from './sectionContact.module.css'
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';

export default function Contact() {
    return (
        <Container>
            <Grid container >
                <Grid column item sm={6} spacing={3}>
                    <h2 className={styles.sectionTitle}>Contacts</h2>

                    <div className={styles.line}></div>

                    <ul className={styles.contactForm}>
                        <li> <FiPhone />+374 55 555 555</li>
                        <li> <AiOutlineMail /> some@mail.com</li>
                        <li> <GoLocation/> Countery, City, Street 55</li>
                    </ul>
                    <h4>Find us on social media</h4>
                </Grid>
                <Grid column item md={6} spacing={3}>
                    <Image  src={section1RightBar} alt="Picture of the author" />
                </Grid>

            </Grid>
        </Container>
    )
}
import styles from './sectionContact.module.css'
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import InputArea from "./contact/inputArea";
import {ImFacebook} from "@react-icons/all-files/im/ImFacebook";
import {IoLogoInstagram} from "@react-icons/all-files/io/IoLogoInstagram";
import {FiInstagram} from "@react-icons/all-files/fi/FiInstagram";
import {FaFacebookF} from "@react-icons/all-files/fa/FaFacebookF";

export default function Contact() {
    const contactBG = {
        padding: '50px',
        backgroundImage: 'url("sectionImages/contactBG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '490px'

    }
    return (
        <Container id="contacts">
            <Grid container >
                <Grid column item sm={6} spacing={3} >
                    <h2 className={styles.sectionTitle}>Contacts</h2>

                    <div className={styles.line}></div>
    
                    <ul className={styles.contactForm}>
                        <li> <FiPhone />+374 55 555 555</li>
                        <li> <AiOutlineMail /> some@mail.com</li>
                        <li> <GoLocation/> Countery, City, Street 55</li>
                    </ul>
                    <h4>Find us on social media</h4>
                    <ul className={styles.socIcon}>
                        <li><a href=""><FaFacebookF className={styles.socIconSh} /><span>facebook</span></a> </li>
                        <li><a href=""> <FiInstagram className={styles.socIconSh} /><span>Instagram</span></a></li>
                    </ul>
                </Grid>
                <Grid column item md={6} spacing={3} style={contactBG}>
                    <InputArea />
                </Grid>

            </Grid>
        </Container>
    )
}
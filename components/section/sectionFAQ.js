import React from 'react';
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";
import SingleFaq from "./faq/singlefaq";
import styles from './sectionFAQ.module.css'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

var faqArray = [
    {
        id:1,
        title:'Thi is sample text 1',
        description:'1Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        text:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id:2,
        title:'Thi is sample text 2',
        description:'2Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        text:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    },
    {
        id:3,
        title:'Thi is sample text 3',
        description:'3Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        text:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
    }]
console.log(faqArray)
export default function Faqs() {
    const faqBG = {
        padding: '50px',
        backgroundImage: 'url("sectionImages/faqBG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '490px'

    }
    return (
        <Container id="faq">
            <h2 className={styles.sectionTitle}>FAQ</h2>

            <Grid container >
                <Flip bottom>

                <Grid column item sm={8} spacing={3} style={faqBG}>
                    <Fade right delay={500}>
                    <div className={styles.faqArea}>
                        {faqArray.map((faq) => (
                            // eslint-disable-next-line react/jsx-no-undef
                            <SingleFaq key={faq.id}
                                 id={faq.id}
                                 title = {faq.title}
                                 description = {faq.description}
                                 text = {faq.text}
                            />
                        ))}
                    </div>
                    </Fade>
                </Grid>
                </Flip>
            <Grid column item md={4} spacing={3}>
                {/*<Image  src={section1RightBar} alt="Picture of the author" />*/}
            </Grid>

        </Grid>
</Container>
    );
}

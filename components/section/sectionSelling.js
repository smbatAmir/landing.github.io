import styles from './sectionSelling.module.css'
import SingleSelling from "./sell/singleSell";
import Link from 'next/link'

import SingleBenefits from "./benefits/singleBenefits";
import { BiRocket } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import { FiTrendingUp } from 'react-icons/fi';
import {useState} from "react";
import {Container, Grid} from "@material-ui/core";
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import Section4 from "./section4";

export default function Selling() {

    var answerArray = [
        {
            id:1,
            icon :<BiRocket/>,
            question :'Dont willing to do more effort ?',
            answer :'No more efforts'
        },
        {
            id:2,
            icon :<BsBarChart/>,
            question :'Want to decrees purchase acquisition cost',
            answer :'No more efforts'
        },
        {
            id:3,
            icon :<FiTrendingUp/>,
            question :'Want to raise revenue ?',
            answer :'No more efforts'
        }
    ]

    const sellBG = {
        backgroundImage: 'url("sectionImages/tab.png")',
        backgroundSize: 'cover',
        width: '77%',
        margin: '0 auto'

        // backgroundPosition:'center',
    }


    return (
        <Container  id='test'>
            <Grid container >
                <Grid column item lg={4} md={4} sm={12} xs={12}  spacing={3}>

                </Grid>
                <Grid column item lg={8} md={8} sm={12} xs={12}  spacing={3} align="right">

                    <h4 className={styles.textTitle} >Start Selling</h4>
                    <p className={styles.sellingDesc}>With No Effort,</p>
                    <p className={styles.sellingDesc}>$0 acqusition coast,</p>
                    <p className={styles.sellingDesc}>Higer revenue...</p>
                </Grid>

            </Grid>
            <Grid container spacing={5}>

                {answerArray.map((answer) => (
                        <SingleSelling key={answer.id}
                            id = {answer.id}
                            icon = {answer.icon}
                            question = {answer.question}
                            answer = {answer.answer}

                        />
                ))}

            </Grid>
            <Grid container justifyContent="center">

                <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3} align="center">
                    <div className={styles.joinButtonArea}>
                        <Link   href="">
                            <a className={styles.joinButton} > Join Uraaa!</a>
                        </Link>
                    </div>
                </Grid>
            </Grid>
        </Container>

    )
}
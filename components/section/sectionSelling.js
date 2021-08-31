import styles from './sectionSelling.module.css'
import SingleSelling from "./sell/singleSell";
import Link from 'next/link'
import {BiRocket} from 'react-icons/bi';
import {BsBarChart} from 'react-icons/bs';
import {FiTrendingUp} from 'react-icons/fi';
import {Container, Grid} from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

export default function Selling() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    var answerArray = [
        {
            id: 1,
            icon: <BiRocket/>,
            question: 'Do you want to spend less effort?',
            answer: 'No more efforts'
        },
        {
            id: 2,
            icon: <BsBarChart/>,
            question: 'Do you want to eliminate your customer acquisition cost?',
            answer: 'No more efforts'
        },
        {
            id: 3,
            icon: <FiTrendingUp/>,
            question: 'Do you want to make more money?',
            answer: 'No more efforts'
        }
    ]

    const sellBG = {
        backgroundImage: 'url("sectionImages/tab.png")',
        backgroundSize: 'cover',
        width: '77%',
        margin: '0 auto'
    }

    return (
        <Container className={styles.sectionSell} id='test' style={{overflow: "hidden"}}>
            <Grid container>
                <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3} align="left">
                    <div data-aos="zoom-in">
                        <h4 className={styles.textTitle}>Start Selling</h4>
                        <p className={styles.sellingDesc}>No extra effort </p>
                        <p className={styles.sellingDesc}> $0 customer acquisition cost </p>
                        <p className={styles.sellingDesc}>Higher income</p>
                    </div>
                </Grid>
            </Grid>

            <Grid container spacing={10} className={styles.backArea}>
                {answerArray.map((answer) => (
                    <SingleSelling key={answer.id}
                                   id={answer.id}
                                   icon={answer.icon}
                                   question={answer.question}
                                   answer={answer.answer}
                                   delay={answer.id * 500}
                    />
                ))}
            </Grid>

            <Grid container justifyContent="center">
                <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3} align="center">
                    <div data-aos="zoom-in">
                        <div className={styles.joinButtonArea}>
                            <Link href="">
                                <a className={styles.joinButton}>Join Uraaa!</a>
                            </Link>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}
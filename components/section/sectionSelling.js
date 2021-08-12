import styles from './sectionSelling.module.css'
import SingleSelling from "./sell/singleSell";
import Link from 'next/link'
import { BiRocket } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import { FiTrendingUp } from 'react-icons/fi';
import {Container, Grid} from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react"; // You can also use <link> for styles

export default function Selling() {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
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
        <Container  id='test' style={{overflow:"hidden"}}>
            <Grid container >
                <Grid column item lg={4} md={4} sm={12} xs={12}  spacing={3}>

                </Grid>
                <Grid column item lg={8} md={8} sm={12} xs={12}  spacing={3} align="right">

                    <div data-aos="zoom-in">


                    <h4 className={styles.textTitle} >Start Selling</h4>
                    <p className={styles.sellingDesc}>With No Effort,</p>
                    <p className={styles.sellingDesc}>$0 acqusition coast,</p>
                    <p className={styles.sellingDesc}>Higer revenue...</p>
                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={5}>

                {answerArray.map((answer) => (
                        <SingleSelling key={answer.id}
                            id = {answer.id}
                            icon = {answer.icon}
                            question = {answer.question}
                            answer = {answer.answer}
                            delay = {answer.id*500}

                        />
                ))}

            </Grid>
            <Grid container justifyContent="center">

                <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3} align="center">
                    <div data-aos="zoom-in">

                    <div className={styles.joinButtonArea}>
                            <Link   href="">
                                <a className={styles.joinButton} > Join Uraaa!</a>
                            </Link>
                    </div>
                    </div>
                </Grid>
            </Grid>
        </Container>

    )
}
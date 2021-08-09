import styles from './section1.module.css'
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";
import {FiPlay} from "@react-icons/all-files/fi/FiPlay";
import VideoMoadal from "./modalVideo";
import TransitionsModal from "./modalVideo";
import {IoClose} from "@react-icons/all-files/io5/IoClose";
import {useState} from "react";
import Link from "next/link";
export default function Section1() {
    const img ={
        position: 'relative'
    }
    const vid ={
        position: 'absolute',
        right: '155px',
        top: '281px',
    }
    const [clickOpen, setclickOpen] = useState({display: 'none'});

    const openModal = (event) => {
        event.preventDefault();
        setclickOpen({display: 'block'})
        }
    const closeModal = (event) => {
        event.preventDefault();
        setclickOpen({display: 'none'})
    }

    return (
        <Container>
        <Grid container >
            <Grid column item  lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <h2 className={styles.sectionTitle}>Start Selling</h2>
                    <h3 className={styles.sectionSubTitle}>With Uraaa!</h3>
                    <div className={styles.line}></div>
                    <div >
                        <h4 className={styles.textTitle}>What is Uraaa ?</h4>
                        <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                  Contrary to popular belief to popular belief, Lorem Ipsum is not simply random text. <span className={styles.rm} onClick={openModal}>Read more</span></p>
                        <div>
                            <Link   href="">
                                <a className={styles.joinButton} > Join Uraaa!</a>
                            </Link>
                        </div>
                    </div>
                <div style={clickOpen} className={styles.secondSee}>
                    < IoClose className={styles.closeModalIcon} onClick={closeModal}/>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    <div className={styles.joinButtonArea}>
                        <Link   href="">
                            <a className={styles.joinButton} > Join Uraaa!</a>
                        </Link>
                    </div>
                </div>
            </Grid>
            <Grid column item  lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.playAreaPar}>
                <div className={styles.playArea}>
                    <h3>Increase your income using our product!</h3>
                    < TransitionsModal
                        videoURL={'https://www.youtube.com/watch?v=LXb3EKWsInQ'}
                    />
                </div>
                <Image  src={section1RightBar} alt="Picture of the author" style={img} />

            </Grid>
        </Grid>
        </Container>
    )
}
import styles from './section1.module.css'
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";
// import {FiPlay} from "@react-icons/all-files/fi/FiPlay";
// import VideoMoadal from "./modalVideo";
import TransitionsModal from "./modalVideo";
import {IoClose} from "@react-icons/all-files/io5/IoClose";
import React, {useEffect, useState} from "react";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

// import ReactPlayer from "react-player"; // You can also use <link> for styles


export default function Section1({homeData}) {
    console.log("homeData__0 ______________________", homeData);

    const videoPosition = {
        position: 'absolute',
    }
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    const img = {
        position: 'relative'
    }
    const vid = {
        position: 'absolute',
        right: '155px',
        top: '281px',
    }
    const [clickOpen, setclickOpen] = useState({display: 'none'});

    const openModal = (event) => {
        if (homeData.text.length > 200)
        event.preventDefault();
        setclickOpen({display: 'block'})
    }
    const closeModal = (event) => {
        event.preventDefault();
        setclickOpen({display: 'none'})
    }

    //backend InnerHTML data decode text
    const createMarkup = () => {
        return {__html: homeData.text}
    }

    return (
        <Container className={styles.section1Container}>
            <Grid container>
                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <div data-aos="fade-left">
                        <h2 className={styles.sectionTitle}>Sell More with Desired Prices & </h2>
                        <h3 className={styles.sectionSubTitle}> Make More Money!</h3>
                        <div>
                            <h4 className={styles.textTitle}>{homeData.title}</h4>

                            {/*don't work reload time____________________________*/}
                            <p>{homeData.text}</p>
                            <p dangerouslySetInnerHTML={createMarkup()}/>


                            <span className={styles.rm} onClick={openModal}>Read more</span>
                            <div>
                                <Link href="/joinurrra">
                                    <a className={styles.joinButton}> Join & Get 30% off</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3} className={styles.playAreaPar}>
                    <div data-aos="fade-right">
                        <div className={styles.playArea}>
                            <TransitionsModal
                                videoURL={'https://www.youtube.com/watch?v=LXb3EKWsInQ'}
                            />
                            <h3>Watch this video to learn more:</h3>
                        </div>

                        <Image src={section1RightBar} alt="Picture of the author" style={img}/>

                        {/*<div style={test}>*/}
                        {/*    <ReactPlayer className={styles.videoArea} width='150px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />*/}
                        {/*</div>*/}

                    </div>
                </Grid>

            </Grid>

            <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3}>
                <div style={clickOpen} className={styles.secondSee}>
                    <div className={styles.secondSeeTitle}>
                        <h4 className={styles.textTitle}>{homeData.title}</h4>
                        <IoClose className={styles.closeModalIcon} onClick={closeModal}/>
                    </div>

                    <div>
                        {/*don't work________________________________________*/}
                        {/*<p className={styles.textDescription} dangerouslySetInnerHTML={{__html: homeData.text}}/>*/}

                        <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply
                            random
                            text. It has roots in a piece of classical Latin literature from 45 BC, making it over
                            2000
                            years old.
                            Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular
                            belief,
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                            literature
                            from 45 BC, making it over 2000 years old.
                            Contrary to popular belief, Lorem Ipsum is not simply random text.Contrary to popular
                            belief,
                            Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
                            literature
                            from 45 BC, making it over 2000 years old.
                            Contrary to popular belief, Lorem Ipsum is not simply random text.
                        </p>
                    </div>

                    <div className={styles.joinButtonArea}>
                        <Link href="/joinurrra">
                            <a className={styles.joinButton}> Join Uraaa!</a>
                        </Link>
                    </div>
                </div>
            </Grid>

        </Container>
    )
}
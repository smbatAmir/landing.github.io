import React from "react";
import styles from './section5.module.css'
import Image from "next/image";
import {Container, Grid} from "@material-ui/core";
import manImages from "../../public/sectionImages/manImages.png";

export default function Section5() {
    return (
        <Container className={styles.section5Container}>
            <div data-aos="zoom-in" className={styles.backCircle}>
            </div>
            <Grid container>
                <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3}>
                    <div data-aos="zoom-in">
                        <h2 className={styles.sectionTitle}>Your 3 Step Simple </h2>
                        <h3 className={styles.sectionSubTitle}>Guide to Join URAAA</h3>
                        <svg className={styles.sectiongraph} xmlns="http://www.w3.org/2000/svg" width="56%" height="238" viewBox="0 0 744 238"
                             fill="none">
                            <path d="M34 213.951C298.313 213.951 491.078 213.951 714 33.9512" stroke="#FF6600"
                                  strokeWidth="2"/>
                            <circle cx="28" cy="209.951" r="28" fill="#FFEDE1"/>
                            <path
                                d="M17 220.951C17 216.826 22.5 216.826 25.25 214.076C26.625 212.701 22.5 212.701 22.5 205.826C22.5 201.243 24.3329 198.951 28 198.951C31.6671 198.951 33.5 201.243 33.5 205.826C33.5 212.701 29.375 212.701 30.75 214.076C33.5 216.826 39 216.826 39 220.951"
                                stroke="#272744" strokeWidth="2" strokeLinecap="round"/>
                            <circle cx="313" cy="198.951" r="28" fill="#FFEDE1"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M322.838 189.093C320.55 186.806 316.841 186.806 314.554 189.093L310.744 192.903C310.505 193.142 310.697 193.518 311.034 193.504L312.612 193.436C312.899 193.424 313.171 193.304 313.374 193.101L315.968 190.507C317.474 189.001 319.917 189.001 321.423 190.507C322.93 192.014 322.93 194.456 321.423 195.963L317.613 199.773C316.107 201.279 313.664 201.279 312.158 199.773C312.095 199.71 312.034 199.645 311.976 199.578C311.714 199.277 311.346 199.068 310.946 199.085C310.195 199.117 309.704 199.883 310.147 200.49C310.325 200.734 310.524 200.967 310.744 201.187C313.031 203.475 316.74 203.475 319.028 201.187L322.838 197.377C325.125 195.089 325.125 191.381 322.838 189.093Z"
                                  fill="#272744"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M314.862 198.575C315.658 198.548 316.159 197.72 315.646 197.111C315.536 196.98 315.42 196.854 315.297 196.731C312.976 194.409 309.212 194.409 306.89 196.731L303.203 200.418C300.882 202.739 300.882 206.503 303.203 208.825C305.525 211.146 309.289 211.146 311.61 208.825L315.297 205.138C315.465 204.97 315.334 204.7 315.097 204.708L313.259 204.77C312.978 204.78 312.71 204.896 312.511 205.095L310.196 207.41C308.656 208.951 306.158 208.951 304.618 207.41C303.077 205.87 303.077 203.372 304.618 201.832L308.305 198.145C309.845 196.605 312.343 196.605 313.883 198.145C314.145 198.407 314.492 198.588 314.862 198.575Z"
                                  fill="#272744"/>
                            <circle cx="716" cy="28.9512" r="28" fill="#FFEDE1"/>
                            <path
                                d="M717.003 20.8507C716.275 21.3333 715.572 21.8928 714.923 22.5417C713.967 23.4976 713.993 23.5495 713.138 24.5279M717.003 20.8507C721.571 17.8276 727.18 17.8276 727.18 17.8276C727.18 17.8276 727.18 23.4366 724.157 28.0038M717.003 20.8507L724.157 28.0038M724.157 28.0038C723.674 28.7328 723.115 29.4353 722.466 30.0841C721.51 31.0401 721.458 31.0144 720.479 31.8692M708.154 30.8571C707.657 31.5552 707.381 31.9698 707.381 31.9698L713.038 37.6266C713.038 37.6266 713.452 37.3503 714.15 36.8537M708.154 30.8571L703.609 26.3129L711.152 22.5417L713.138 24.5279M708.154 30.8571C709.12 29.4992 710.919 27.0683 713.138 24.5279M714.15 36.8537L718.694 41.3979L722.466 33.8554L720.479 31.8692M714.15 36.8537C715.508 35.8878 717.939 34.0887 720.479 31.8692"
                                stroke="#272744" strokeWidth="2"/>
                            <path
                                d="M706.667 38.2845C707.134 36.3945 708 35.6179 708.667 36.2845C709.333 36.9511 708.557 37.8174 706.667 38.2845Z"
                                stroke="#272744" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </Grid>

                <Grid column item lg={10} md={10} sm={10} xs={12} spacing={3}>
                    <Grid container className={styles.listColWraper}>
                        <Grid column lg={3} md={4} sm={4} xs={12} spacing={3}>
                            <div data-aos="zoom-in">
                                <span className={styles.colTitle}><span>1 </span> preregister</span>
                                <ul className={styles.listCol}>
                                    <li>Sign up!</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid column lg={4} md={4} sm={4} xs={12} spacing={3}>
                            <div data-aos="zoom-in">
                                <span className={styles.colTitle}><span>2 </span> Integrate your store</span>
                                <ul className={styles.listCol}>
                                    <li>Provide your store URL</li>
                                    <li>Provide your website specific</li>
                                    <li>We do the rest for you!</li>
                                </ul>
                            </div>
                        </Grid>

                        <Grid column lg={3} md={4} sm={4} xs={12} spacing={3} className={styles.endColum}>
                            <div data-aos="zoom-in">
                                <span className={styles.colTitle}><span>3 </span>Start Benefiting</span>
                                <ul className={styles.listCol}>
                                    <li>Get more sales</li>
                                    <li>Higher profit</li>
                                    <li>Lower acquisition cost</li>
                                </ul>
                                <button className={styles.section5Button}>Join Now!</button>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <div data-aos="zoom-in">
                    <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3} className={styles.backArea}>
                        <Grid container>
                            <Grid column item lg={8} md={8} sm={8} xs={12} spacing={3}>
                                <h2 className={styles.sectionTitle2}>Preregister today & get
                                    <span className={styles.sectionSubTitle2}> 30% discount </span>
                                    the first year
                                </h2>
                            </Grid>

                            <Grid column item lg={4} md={4} sm={4} xs={12} spacing={3} className={styles.backImages}>
                                <Image src={manImages} alt="Picture of the author"/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Container>
    )
}
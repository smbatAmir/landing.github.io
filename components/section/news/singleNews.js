import Image from "next/image";
import styles from './../sectionNews.module.css'
import Link from "next/link";
import {Grid, Paper} from "@material-ui/core";
import React, {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function SingleNews({id,images, title, url, description, data, delay}) {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (

        // <Grid column item lg={3} md={3} sm={12} xs={12}  >
        //         <div className={styles.singleBenefits}>
        //             <Link href={url} >
        //                 <a className={styles.cartHref}>
        //                     <img className={styles.singleBenefitsImages}  src={images} alt=""/>
        //                     <p className={styles.singleNewsTitle}>{title}</p>
        //                     <p className={styles.singleNewsDescription}>{description}</p>
        //                     <p className={styles.singleNewsData}>Posted on: <span>{data}</span></p>
        //                 </a>
        //             </Link>
        //         </div>
        // </Grid>
        <Grid column item lg={12} md={12} sm={12} xs={12}  className={styles.singleNewsArea}>
            <div  data-aos ={id %2 == 0? "fade-left": "fade-right" }>
                <Link href={`/news/${id}`} >
                    <a className={styles.cartHref}>
                        <Grid container >
                            <Grid column item lg={4} md={4} sm={12} xs={12}  spacing={3} className={styles.newslistIImg}>
                                <img className={styles.singleBenefitsImages}  src={images} alt=""/>
                            </Grid>
                            <Grid column item lg={8} md={8} sm={12} xs={12}  spacing={3} className={styles.newslisttext}>
                                <p className={styles.singleNewsTitle}>{title}</p>
                                <p className={styles.singleNewsDescription}>{description}</p>
                                <p className={styles.singleNewsData}>Posted on: <span>{data}</span></p>
                            </Grid>
                        </Grid>
                    </a>
                </Link>
            </div>
                    {/*<div className={styles.singleBenefits}>*/}
                    {/*    <Link href={url} >*/}
                    {/*        <a className={styles.cartHref}>*/}
                    {/*            <img className={styles.singleBenefitsImages}  src={images} alt=""/>*/}
                    {/*            <p className={styles.singleNewsTitle}>{title}</p>*/}
                    {/*            <p className={styles.singleNewsDescription}>{description}</p>*/}
                    {/*            <p className={styles.singleNewsData}>Posted on: <span>{data}</span></p>*/}
                    {/*        </a>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
            </Grid>

    )
}
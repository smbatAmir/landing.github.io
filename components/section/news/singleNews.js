import Image from "next/image";
import styles from './../sectionNews.module.css'
import Link from "next/link";
import {Grid, Paper} from "@material-ui/core";



export default function SingleNews({images, title, url, description, data}) {

    return (

        <Grid column item md={6} >
            <div className={styles.singleBenefits}>
                <Link href={url} >
                    <a className={styles.cartHref}>
                        <img className={styles.singleBenefitsImages}  src={images} alt=""/>
                        <p className={styles.singleNewsTitle}>{title}</p>
                        <p className={styles.singleNewsDescription}>{description}</p>
                        <p className={styles.singleNewsData}>Posted on: <span>{data}</span></p>
                    </a>
                </Link>
            </div>
        </Grid>

    )
}
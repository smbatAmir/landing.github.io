import Image from "next/image";
import styles from './../sectionNews.module.css'
import Link from "next/link";
import {Grid, Paper} from "@material-ui/core";
import Zoom from 'react-reveal/Zoom';



export default function SingleNews({images, title, url, description, data, delay}) {

    return (

        <Grid column item lg={6} md={6} sm={12} xs={12}  >
            <Zoom top delay={delay}>
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
            </Zoom>
        </Grid>

    )
}
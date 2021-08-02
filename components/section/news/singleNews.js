import Image from "next/image";
import styles from './../sectionNews.module.css'
import Link from "next/link";
import {Grid, Paper} from "@material-ui/core";



export default function SingleNews({images, title, url, description}) {

    return (

        <Grid item md={6}>
            {/*<Paper >xs=3</Paper>*/}
            <div >
                <Link href={url} >
                    <a>
                        <img className={styles.singleNewsImages}  src={images} alt=""/>
                        {/*<Image className={styles.singleBenefitsImages}  src={images} alt="Picture of the author"  />*/}
                        <p className={styles.singleNewsTitle}>{title}</p>
                        <p className={styles.singleNewsDescription}>{description}</p>
                    </a>
                </Link>
            </div>
        </Grid>


    )
}
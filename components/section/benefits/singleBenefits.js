import Image from "next/image";
import styles from './../sectionBenefits.module.css'
import Link from "next/link";
import { makeStyles } from '@material-ui/core/styles';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});
export default function SingleBenefits({images, title, url}) {
    const classes = useStyles();

    return (
        <Grid column item md={6} >
            <div className={styles.singleBenefits}>
            <Link href={url} >
                <a className={styles.cartHref}>
                    <img className={styles.singleBenefitsImages}  src={images} alt=""/>
                    <p className={styles.singleBenefitsTitle}>{title}</p>
                </a>
            </Link>
            </div>
        </Grid>

    )
}
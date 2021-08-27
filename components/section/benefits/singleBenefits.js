// import Image from "next/image";
// import styles from './../sectionBenefits.module.css'
// import Link from "next/link";
// import {makeStyles} from '@material-ui/core/styles';
// import {Grid} from "@material-ui/core";
// import React from "react";
//
// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });
// export default function SingleBenefits({id, images, title, text, startDate}) {
//     const classes = useStyles();
//
//     return (
//         <Grid column item lg={3} md={3} sm={12} xs={12}>
//             <div className={styles.singleBenefits}>
//                 <Link href={`/benefits/${id}`}>
//                     <a className={styles.cartHref}>
//                         <img className={styles.singleBenefitsImages} src={images ? images : ""} alt=""/>
//                         <h4 className={styles.singleBenefitsTitle}>{title}</h4>
//                         <p>{text}</p>
//                     </a>
//                 </Link>
//             </div>
//         </Grid>
//
//     )
// }
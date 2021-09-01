import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import Link from "next/link";
import Image from "next/image";
import styles from '../../styles/Benefit.module.css';

export default function Benefits({allBenefit}) {
    // console.log("allBenefit_______________", allBenefit);

    return (
        <Container className={styles.benefitsContainer}>
            <Grid container>
                <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                    <h4 className={styles.textTitle}>Benefits</h4>
                </Grid>
            </Grid>

            <Grid container>
                {allBenefit.map((benefit, idx) => (
                    <Grid column item lg={3} md={3} sm={12} xs={12} key={idx} className={styles.benefitsCard}>
                        <div className={styles.singleBenefits}>
                            <Link href={`/benefit/${benefit._id}`} as={`/benefit/${benefit._id}`} key={benefit._id}>
                                <a className={styles.cartHref}>
                                    <Image className={styles.singleBenefitsImages}
                                           width={290}
                                           height={290}
                                        // layout="fill"
                                           src={`https://ura-cdn.nyc3.digitaloceanspaces.com/${benefit.thumbnailUrl}`}
                                           alt=""
                                    />
                                    <h4 className={styles.singleBenefitsTitle}>{benefit.title}</h4>
                                </a>
                            </Link>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

Benefits.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar/>
            {page}
        </Layout>
    )
}

export async function getStaticProps() {
    const allBenefit = await fetch("https://api-settings.uraaa.com/banners/all?settingName=Benefit")
        .then(
            (res) => res.json()
        );

    return {
        props: {
            allBenefit: allBenefit.banners
        }
    }
}
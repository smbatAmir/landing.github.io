import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import styles from "../../styles/News.module.css";
import Link from "next/link";
import React from "react";
import {BsArrowLeft} from "@react-icons/all-files/bs/BsArrowLeft";

export default function BenefitsId({benefitItem}) {
    const item = benefitItem.banners[0];
    console.log("benefitItem_____________________", item);

    return (
        <div style={{background: '#FFF6F0', paddingBottom: '10%'}}>
            <Container>
                <Grid container>
                    <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3} className={styles.BackItemsArea}>
                        <Link href="/benefit">
                            <a className={styles.BackItems}>
                                <BsArrowLeft/> Back
                            </a>
                        </Link>
                    </Grid>
                </Grid>

                <Grid container lg={12} md={12} sm={12} xs={12} className={styles.singleNewsItmeArea} spacing={3}>
                    <Grid container>
                        <Grid column item lg={8} md={8} sm={12} xs={12} spacing={3}
                              className={styles.newsItemTItleAndData}>
                            <img className={styles.singleBenefitsImages}
                                 src={item.thumbnailUrl ? `https://ura-cdn.nyc3.digitaloceanspaces.com/${item.thumbnailUrl}` : ""}
                                 alt=""
                            />
                            <h1 className={styles.newsitemsTitle}>{item.title}</h1>
                            <p>{item.text}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

BenefitsId.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar/>
            {page}
        </Layout>
    )
}

export const getServerSideProps = async (context) => {
    const res = await fetch(
        `https://api-settings.uraaa.com/banners/all?id=${context.params.id}`
    );
    const benefitItem = await res.json();

    return {
        props: {
            benefitItem,
        },
    };
};
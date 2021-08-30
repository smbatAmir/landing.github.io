import React, {useEffect} from "react";
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import styles from "../../styles/News.module.css";
import Link from "next/link";
import {BsArrowLeft} from "@react-icons/all-files/bs/BsArrowLeft";
import AOS from "aos";

export default function NewsId({newsItem}) {
    const item = newsItem.banners[0];
    // console.log("newsItem__________", newsItem)

    return (
        <div style={{background: '#FFF6F0', paddingBottom: '10%'}}>
            <Container>
                <Grid container>
                    <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3} className={styles.BackItemsArea}>
                        <Link href="/news">
                            <a className={styles.BackItems}>
                                <BsArrowLeft/> Back
                            </a>
                        </Link>
                    </Grid>
                </Grid>

                <Grid column item lg={4} md={4} sm={12} xs={12} spacing={3} className={styles.newslistIImg}>
                    <img className={styles.singleBenefitsImages}
                         src={item.thumbnailUrl ? `https://ura-cdn.nyc3.digitaloceanspaces.com/${item.thumbnailUrl}` : ""}
                         alt=""
                    />
                </Grid>

                <Grid column item lg={8} md={8} sm={12} xs={12} spacing={3} className={styles.newslisttext}>
                    <h1 className={styles.singleNewsTitle}>{item.title}</h1>
                    <p className={styles.singleNewsDescription}>{item.text}</p>
                    <p className={styles.singleNewsData}>Posted on: <span>{item.createdAt}</span></p>
                </Grid>

            </Container>
        </div>
    )
}

NewsId.getLayout = function getLayout(page) {
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
    const newsItem = await res.json();

    return {
        props: {
            newsItem,
        },
    };
};

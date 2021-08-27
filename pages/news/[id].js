import React from "react";
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import styles from "../../styles/News.module.css";
import Link from "next/link";
import {BsArrowLeft} from "@react-icons/all-files/bs/BsArrowLeft";

//allNews: allNews.banners
export async function getStaticPaths() {
    const res = await fetch('https://api-settings.uraaa.com/banners/all?settingName=News')
    const allNews = await res.json();

    console.log("getStaticPaths allNews paths__________________",allNews);

    const paths = allNews.banners.map(news => {
        return {
            params: {_id: news._id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch("https://api-settings.uraaa.com/banners/all?settingName=News/" + id)
    const singleNews = await res.json();

    return {
        props: {
            singleNews
        }
    }
}

export default function NewsItems({singleNews}) {
    console.log("______________________________________", singleNews)

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

                <h1>news1</h1>

            </Container>
        </div>
    )
}

NewsItems.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar/>
            {page}
        </Layout>
    )
}























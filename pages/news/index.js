import React from "react";
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container/index";
import {Grid} from "@material-ui/core/index";
import styles from "../../styles/News.module.css";
import Link from "next/link";

export default function News({allNews}) {
    console.log("allNews 101______________________", allNews);

    return (
        <div style={{background: '#FFF6F0'}}>
            <Container>
                <Grid container>
                    <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                        <h4 className={styles.textTitle}>What’s new ?</h4>
                    </Grid>
                </Grid>

                <Grid container lg={12} md={12} sm={12} xs={12}
                      className={styles.newsContainer}
                      spacing={3}
                >
                    {allNews?.map((news) => (
                        <Link key={news.id} href="/news/[id]" as={`/news/${news.id}`}>
                            <a>
                                <strong>{news.title ? news.title: "News Title Here"}</strong>
                            </a>
                        </Link>
                    ))}
                </Grid>

                <Grid container>
                    <Grid column item lg={12} md={12} sm={12} xs={12} spacing={3}
                          style={{textAlign: 'center', marginBottom: '50px'}}>
                        <Link href="">
                            <a className={styles.allNews}>Open All News</a>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

News.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar/>
            {page}
        </Layout>
    )
}


export async function getStaticProps() {
    const allNews = await fetch("https://api-settings.uraaa.com/banners/all?settingName=News")
        .then(
            (res) => res.json()
        );

    return {
        props: {
            allNews: allNews.banners
        }
    }
}
import React, {useEffect} from "react";
import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container/index";
import {Grid} from "@material-ui/core/index";
import styles from "../../styles/News.module.css";
import Link from "next/link";
import AOS from "aos";
import Image from "next/image";

const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

export default function News({allNews}) {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])

    // console.log("allNews______________________", allNews);

    return (
        <div className={styles.newsContainerWraperBG}>
            <Container className={styles.newsContainerWraper}>
                <Grid container>
                    <Grid column item lg={6} md={6} sm={12} xs={12} spacing={3}>
                        <h4 className={styles.textTitle}>What’s new ?</h4>
                    </Grid>
                </Grid>

                <Grid container lg={12} md={12} sm={12} xs={12} className={styles.newsContainer} spacing={3}>
                    {allNews?.map((news, idx) => (
                        <div data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"} key={idx}
                             className={styles.newsContainerCard}>
                            <Link href={`/news/${news._id}`} as={`/news/${news._id}`} key={news._id}>
                                <a>
                                    {news.thumbnailUrl &&
                                    <Image className={styles.singleNewsImages}
                                           width={360}
                                           height={230}
                                           src={`https://ura-cdn.nyc3.digitaloceanspaces.com/${news.thumbnailUrl}`}
                                           alt=""
                                    />
                                    }
                                    <div className={styles.singleNewsText}>
                                        <h3 className={styles.newsContainerTitle}>{news.title ? news.title : "News Title Here"}</h3>
                                        <p className={styles.newsContainerText}>{htmlToReactParser.parse(news.text)}</p>
                                        <span className={styles.newsContainerPostedOn}>
                                            Posted on: <span>{news.createdAt}</span>
                                        </span>
                                    </div>
                                </a>
                            </Link>
                        </div>
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
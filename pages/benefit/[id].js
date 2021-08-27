import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import styles from "../../styles/News.module.css";
// import Flip from "react-reveal/Flip";
// import SingleNews from "../../components/section/news/singleNews";
import Link from "next/link";
// import Fade from "react-reveal/Fade";
import React from "react";
import {BsArrowLeft} from "@react-icons/all-files/bs/BsArrowLeft";
import {useRouter} from "next/router";


export default function BenefitsItems() {
    const router = useRouter()

    // var benefistArray = [
    //     {
    //         id:0,
    //         images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //         title :'11thi is sample text',
    //         description:'11hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //
    //     },
    //     {
    //         id:1,
    //         images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
    //         title :'22thi is sample text',
    //         description:'12hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //     },
    //     {
    //         id:2,
    //         images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
    //         title :'33thi is sample text',
    //         description:'33hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //
    //     },
    //     {
    //         id:3,
    //         images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
    //         title :'112thi is sample text',
    //         description:'212hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //
    //     },
    //     {
    //         id:4,
    //         images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
    //         title :'23thi is sample text',
    //         description:'213hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //     },
    //     {
    //         id:5,
    //         images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    //         title :'3thi is sample text',
    //         description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //     },
    //     {
    //         id:6,
    //         images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
    //         title :'4thi is sample text',
    //         description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //     },
    //     {
    //         id:7,
    //         images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
    //         title :'5 is sample text',
    //         description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //
    //     },
    //     {
    //         id:8,
    //         images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
    //         title :'6thi is sample text',
    //         description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //
    //     },
    //     {
    //         id:9,
    //         images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
    //         title :'10thi is sample text',
    //         description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
    //
    //         url :'/contact'
    //     },]

    let post_id = router.query.id
    if(router.query.id) {
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
                                <h1 className={styles.newsitemsTitle}>title</h1>
                            </Grid>
                            <Grid column item lg={4} md={4} sm={12} xs={12} spacing={3}
                                  className={styles.newsItemTItleAndData}>
                                {/*<p className={styles.singleNewsData}>Posted on: <span>{benefistArray[post_id].data}</span></p>*/}
                            </Grid>
                        </Grid>

                        {/*<Grid container>*/}
                        {/*    <Grid column item lg={4} md={4} sm={12} xs={12} spacing={3} className={styles.newslistIImg}>*/}
                        {/*        <img className={styles.singleBenefitsImages} src={benefistArray[post_id].images}*/}
                        {/*             alt=""/>*/}
                        {/*    </Grid>*/}
                        {/*    <Grid column item lg={8} md={8} sm={12} xs={12} spacing={3} className={styles.newslisttext}>*/}
                        {/*        <p className={styles.singleNewsDescription}>{benefistArray[post_id].description}</p>*/}
                        {/*    </Grid>*/}
                        {/*</Grid>*/}

                        {/*{benefistArray.map((news) => (*/}
                        {/*    <SingleNews key={news.id}*/}
                        {/*                images = {news.images}*/}
                        {/*                title = {news.title}*/}
                        {/*                description = {news.description}*/}
                        {/*                url = {news.url}*/}
                        {/*                data = {news.data}*/}
                        {/*                delay = {news.id *100}*/}
                        {/*    />*/}
                        {/*))}*/}
                    </Grid>
                </Container>
            </div>
        )
    }else{
        return (
            <div style={{background: '#FFF6F0', paddingBottom: '10%'}}>
                <Container>


                </Container>
            </div>
        )
    }
}

BenefitsItems.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}
        </Layout>
    )
}
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import styles from "../components/section/sectionNews.module.css";
import Flip from "react-reveal/Flip";
import SingleNews from "../components/section/news/singleNews";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import React from "react";


export default function News() {
    const newsArea ={
        backgroundImage: 'url("sectionImages/circle.png")',
        backgroundSize: '80%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '490px'

    }
    var NewsArray = [
        {
            id:1,
            images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'thi is sample text',
            description:'hi is Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,  classical literature,  discovered...samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:2,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sampRichard McClintock, a Latin professor at Latin words, consectetur, fr...le text',
            description:'hi is samRichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage...plehiRichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage... is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:3,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'thi is sample text',
            description:'',
            url :'/contact',
            data :'21.07.2021'

        },

        {
            id:4,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },

        {
            id:5,
            images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:6,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:7,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'thi is sample text',
            description:'',
            url :'/contact',
            data :'21.07.2021'

        },

        {
            id:8,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:9,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
            url :'/contact',
            data :'21.07.2021'

        },]
    return (
<div style={{background: '#FFF6F0'}}>
        <Container >
            <Grid container >
                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                        <h4 className={styles.textTitle}>What’s new ?</h4>
                        <div className={styles.line}></div>
                </Grid>
            </Grid>
                <Grid container  lg={12} md={12} sm={12} xs={12}  className={styles.newsContainer} spacing={3}>
                    {NewsArray.map((news) => (
                        <SingleNews key={news.id}
                                    images = {news.images}
                                    title = {news.title}
                                    description = {news.description}
                                    id = {news.id}
                                    url = {news.url}
                                    data = {news.data}
                                    delay = {news.id *100}
                        />
                    ))}
                </Grid>
            <Grid container >
                <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3} style={{textAlign:'center', marginBottom:'50px'}}>
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
            <Sidebar />
            {page}

        </Layout>
    )
}
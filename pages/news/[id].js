import Layout from '../../components/layout'
import Sidebar from '../../components/sidebar'
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import styles from "../../components/section/sectionNews.module.css";
import Flip from "react-reveal/Flip";
import SingleNews from "../../components/section/news/singleNews";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import React from "react";
import {BsArrowLeft} from "@react-icons/all-files/bs/BsArrowLeft";
import {useRouter} from "next/router";


export default function NewsItems() {
    const router = useRouter()
    console.log(router)

    var NewsArray = [
        {
            id:1,
            images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'1thi is sample text',
            description:'1hi is Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,  classical literature,  discovered...samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:2,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'2thi is sampRichard McClintock, a Latin professor at Latin words, consectetur, fr...le text',
            description:'2hi is samRichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage...plehiRichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage... is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:3,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'3thi is sample text',
            description:'3',
            url :'/contact',
            data :'21.07.2021'

        },

        {
            id:4,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'4thi is sample text',
            description:'4hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
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
            id:6,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',
            url :'/contact',
            data :'21.07.2021'

        },]
    let post_id = router.query.id-1
    if(router.query.id){


    return (
        <div style={{background: '#FFF6F0', paddingBottom:'10%'}}>
            <Container >
                <Grid container >
                    <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3} className={styles.BackItemsArea}>
                        <Link  href="/news">
                            <a className={styles.BackItems}>
                                <BsArrowLeft /> Back
                            </a>
                        </Link>
                    </Grid>
                </Grid>
                <Grid container  lg={12} md={12} sm={12} xs={12}  className={styles.singleNewsItmeArea} spacing={3}>
                    <Grid container >
                        <Grid column item lg={8} md={8} sm={12} xs={12}  spacing={3}  className={styles.newsItemTItleAndData}>
                            <h1 className={styles.newsitemsTitle}>{NewsArray[post_id].title}</h1>
                        </Grid>
                        <Grid column item lg={4} md={4} sm={12} xs={12}  spacing={3} className={styles.newsItemTItleAndData}>
                            <p className={styles.singleNewsData}>Posted on: <span>{NewsArray[post_id].data}</span></p>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid column item lg={4} md={4} sm={12} xs={12}  spacing={3} className={styles.newslistIImg}>
                            <img className={styles.singleBenefitsImages}  src={NewsArray[post_id].images} alt=""/>
                        </Grid>
                        <Grid column item lg={8} md={8} sm={12} xs={12}  spacing={3} className={styles.newslisttext}>
                            <p className={styles.singleNewsDescription}>{NewsArray[post_id].description}</p>
                        </Grid>
                    </Grid>
                </Grid>

            </Container>
        </div>
    )
    }else{
        return (
            <div style={{background: '#FFF6F0', paddingBottom:'10%'}}>
                <Container >


                </Container>
            </div>
        )

    }
}

NewsItems.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}

        </Layout>

    )
}
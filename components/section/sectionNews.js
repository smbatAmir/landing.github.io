import styles from './sectionNews.module.css'
import SingleSelling from "./sell/singleSell";
import Link from 'next/link'
import SingleNews from "./news/singleNews";
import SingleBenefits from "./benefits/singleBenefits";
import Container from "@material-ui/core/Container";
import {Grid, Paper} from "@material-ui/core";
import Image from "next/image";
import section1RightBar from "../../public/sectionImages/hero_section_guy.png";


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
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact',
            data :'21.07.2021'
        },
        {
            id:2,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
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
        }]
    // {NewsArray.map((news) => (
    //     <SingleNews key={news.id}
    //                 images = {news.images}
    //                 title = {news.title}
    //                 description = {news.description}
    //                 url = {news.url}
    //     />
    // ))}
    return (
        <Container>
            <Grid container >
                <Grid column item md={4} spacing={3}>

                </Grid>
                <Grid column item md={8} spacing={3} align="right">

                    <h4 className={styles.textTitle} >What’s new ? </h4>
                    <div className={styles.line}></div>

                </Grid>

            </Grid>
            <Grid container  md={6} className={styles.newsContainer} spacing={3} style={newsArea}>
                {NewsArray.map((news) => (
                    // <Grid  container  md={6}  justifyContent="center" alignItems="center" key={news.id}>

                        <SingleNews key={news.id}
                            images = {news.images}
                            title = {news.title}
                            description = {news.description}
                            url = {news.url}
                            data = {news.data}
                        />
                    // </Grid>
                ))}



            </Grid>
        </Container>



    )
}
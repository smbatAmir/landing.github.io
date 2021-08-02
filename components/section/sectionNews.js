import styles from './sectionNews.module.css'
import SingleSelling from "./sell/singleSell";
import Link from 'next/link'
import SingleNews from "./news/singleNews";
import SingleBenefits from "./benefits/singleBenefits";
import Container from "@material-ui/core/Container";
import {Grid, Paper} from "@material-ui/core";


export default function News() {
    const newsArea ={
        backgroundImage: 'url("sectionImages/circle.png")',
        backgroundSize: '30%',
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
            url :'/contact'
        },
        {
            id:2,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact'
        },
        {
            id:3,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'thi is sample text',
            description:'',
            url :'/contact'

        },
        {
            id:4,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehi is samplehi is samplehi is sample',
            url :'/contact'
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
        <Container maxWidth="sm">

        <Grid container spacing={3}>

            {NewsArray.map((news) => (
                <SingleNews key={news.id}
                            images = {news.images}
                            title = {news.title}
                            description = {news.description}
                            url = {news.url}
                />
            ))}

            {/*<Grid item xs={3}>*/}
            {/*    <Paper >xs=3</Paper>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={3}>*/}
            {/*    <Paper>xs=3</Paper>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={3}>*/}
            {/*    <Paper >xs=3</Paper>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={8}>*/}
            {/*    <Paper >xs=8</Paper>*/}
            {/*</Grid>*/}
            {/*<Grid item xs={4}>*/}
            {/*    <Paper >xs=4</Paper>*/}
            {/*</Grid>*/}
        </Grid>
        </Container>
    )
}
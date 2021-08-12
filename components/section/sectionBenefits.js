import styles from './sectionBenefits.module.css'
import SingleBenefits from "./benefits/singleBenefits";
import {Container, Grid} from "@material-ui/core";
import Flip from 'react-reveal/Flip';
import Fade from "react-reveal/Fade";
import React from "react";
import SingleNews from "./news/singleNews";

export default function BenefitsAll() {
    var benefistArray = [
        {
            id:1,
            images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'11thi is sample text',
            description:'11hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'

        },
        {
            id:2,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'22thi is sample text',
            description:'12hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'
        },
        {
            id:3,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'33thi is sample text',
            description:'33hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'

        },
        {
            id:4,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'112thi is sample text',
            description:'212hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'

        },
        {
            id:5,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'23thi is sample text',
            description:'213hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'
        },
        {
            id:6,
            images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'3thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'
        },
        {
            id:7,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'4thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'
        },
        {
            id:8,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'5 is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'

        },
        {
            id:9,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'6thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'

        },
        {
            id:10,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'10thi is sample text',
            description:'hi is samplehi is samplehi is samplehi is samplehhi is samplehi is samplehi is samplehi is sampleh',

            url :'/contact'
        },]


    return (
        <Container >
            <Grid container >
                <Grid column item lg={12} md={12} sm={12} xs={12}  spacing={3}>
                    <Grid container >
                    {benefistArray.map((singleBene) => (
                        <SingleBenefits key={singleBene.id}
                            images = {singleBene.images}
                            title = {singleBene.title}
                            id = {singleBene.id}
                        />
                    ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
      
    )
}
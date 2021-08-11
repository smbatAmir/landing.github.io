import styles from './sectionBenefits.module.css'
import SingleBenefits from "./benefits/singleBenefits";
import {Container, Grid} from "@material-ui/core";
import Flip from 'react-reveal/Flip';
import Fade from "react-reveal/Fade";
import React from "react";

export default function BenefitsAll() {
    var benefistArray = [
        {
            id:1,
            images :'https://images.unsplash.com/photo-1571844307880-751c6d86f3f3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjB3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'thi is sample text',
            url :'/contact'
        },
        {
            id:2,
            images :'https://d39l2hkdp2esp1.cloudfront.net/img/photo/126382/126382_00_2x.jpg',
            title :'thi is sample text',
            url :'/contact'
        },
        {
            id:3,
            images :'https://previews.123rf.com/images/undrey/undrey1605/undrey160500112/56413726-young-woman-working-as-an-office-manager-planning-work-tasks-writing-down-her-schedule-to-planner-at.jpg',
            title :'thi is sample text',
            url :'/contact'

    }]
    const benefitsBG = {
        backgroundImage: 'url("sectionImages/benefistBG.png")',
        backgroundSize: 'cover',
     }
    const elips = {
        backgroundImage: 'url("sectionImages/Ellipse.png")',
        backgroundSize: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // height: '439px'
    }

    return (
        <Container id='benefits' style={{paddingTop:'105px'}}>
            <Flip top >

                <Grid container style={benefitsBG}>
                <Grid column item md={6} spacing={3} >
                    <Fade left delay={1000}>

                    <h4 className={styles.textTitle}>Benefits</h4>
                    <div className={styles.line}></div>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. <span>Read more</span></p>
                    </Fade>
                </Grid>
                <Grid  container  md={6} justifyContent="center" alignItems="center" style={elips} tyle={{marginTop:'-100px'}}>
                    <Fade right delay={1000}>

                    <Grid container  md={12} justifyContent="center" alignItems="center">
                        {benefistArray.map((benefist) => (
                            <SingleBenefits key={benefist.id}
                                            images = {benefist.images}
                                            title = {benefist.title}
                                            url = {benefist.url}
                            />
                        ))}
                    </Grid>
                    </Fade>
                </Grid>

            </Grid>
            </Flip>
        </Container>
      
    )
}
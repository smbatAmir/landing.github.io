import styles from './sectionBenefits.module.css'
import Image from "next/image";
import section2leftbar from "../../public/sectionImages/cross_platform_devices.png";
import SingleBenefits from "./benefits/singleBenefits";
import singleBenefits1 from "../../public/sectionImages/singlebenefits1.png";
import singleBenefits2 from "../../public/sectionImages/singlebenefist2.png";
import {Container, Grid} from "@material-ui/core";
import section3 from "../../public/sectionImages/section3b.png";

export default function Benefits() {
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
    console.log(benefistArray[0].title)
    const benefitsBG = {
        backgroundImage: 'url("sectionImages/benefistBG.png")',
        backgroundSize: 'cover',
     }
    const elips = {
        backgroundImage: 'url("sectionImages/Ellipse.png")',
        backgroundSize: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '439px'
    }

    return (
        <Container>
            <Grid container style={benefitsBG}>
                {/*<Grid column item md={1} spacing={3} >*/}
                {/*</Grid>*/}
                <Grid column item md={6} spacing={3} >

                    <h4 className={styles.textTitle}>Benefits</h4>
                    <div className={styles.line}></div>
                    <p className={styles.textDescription}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. <span>Read more</span></p>
                </Grid>
                <Grid  container  md={6} justifyContent="center" alignItems="center">
                    {benefistArray.map((benefist) => (
                        <SingleBenefits key={benefist.id}
                                        images = {benefist.images}
                                        title = {benefist.title}
                                        url = {benefist.url}
                        />
                    ))}
                </Grid>

            </Grid>
        </Container>
      
    )
}
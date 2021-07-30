import styles from './sectionBenefits.module.css'
import Image from "next/image";
import section2leftbar from "../../public/sectionImages/cross_platform_devices.png";
import SingleBenefits from "./benefits/singleBenefits";
import singleBenefits1 from "../../public/sectionImages/singlebenefits1.png";
import singleBenefits2 from "../../public/sectionImages/singlebenefist2.png";

export default function Benefits() {
    var benefistArray = [
        {
            id:1,
            images :'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3N3b21hbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
            title :'thi is sample text',
            url :'/contact'
        },
        {
            id:2,
            images :'https://c0.wallpaperflare.com/preview/807/163/816/business-lady-woman-girl.jpg',
            title :'thi is sample text',
            url :'/contact'
        },
        {
            id:3,
            images :'https://cdn.pixabay.com/photo/2018/07/25/08/59/business-3560934_640.jpg',
            title :'thi is sample text',
            url :'/contact'

    }]
    console.log(benefistArray[0].title)
    const benefitsBG = {
        backgroundImage: 'url("sectionImages/benefistBG.png")',
        backgroundSize: 'cover',
        width: '77%',
        margin: '0 auto'

        // backgroundPosition:'center',
    }
    const elips = {
        backgroundImage: 'url("sectionImages/Ellipse.png")',
        backgroundSize: '50%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '439px'
    }
    return (

        <div className={styles.row} style={benefitsBG}>


            <div className={styles.column}>
                <div className={styles.rightColumn }>
                    {/*<Image className={styles.sectinoImages} src={section2leftbar} alt="Picture of the author" />*/}
                    <h2>Benefits</h2>
                    <div className={styles.line}></div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it
                        Contrary to popular belief, Lorem Ipsum is not simply random text. </p>

                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.leftColumn} style={elips}>
                    {benefistArray.map((benefist) => (
                        <SingleBenefits key={benefist.id}
                        images = {benefist.images}
                        title = {benefist.title}
                        url = {benefist.title}
                        />
                    ))}

                </div>
            </div>
        </div>

    )
}
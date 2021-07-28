import styles from './sectionBenefits.module.css'
import Image from "next/image";
import section2leftbar from "../../public/sectionImages/cross_platform_devices.png";

export default function Benefits() {
    return (

        <div className={styles.row}>

            <div className={styles.column}>
                <div className={styles.rightColumn }>
                    {/*<Image className={styles.sectinoImages} src={section2leftbar} alt="Picture of the author" />*/}
                    <h2>Benefits</h2>
                    <div className={styles.line}></div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.*/}
                        Contrary to popular belief, Lorem Ipsum is not simply random text. </p>

                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.leftColumn}>

                </div>
            </div>

        </div>

    )
}
import styles from './section3.module.css'
import Image from "next/image";
import section3RightBar from "../../public/sectionImages/web_extension_lapto.png";

export default function Section3() {
    return (

        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.leftColumn}>
                    <h2>Start Selling</h2>
                    <h3>With Uraaa!</h3>
                    <div className={styles.line}></div>
                    <h4>What is Uraaa ?</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text. <span>Read more</span></p>
                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.rightColumn }>
                    <Image className={styles.sectinoImages} src={section3RightBar} alt="Picture of the author" />

                </div>
            </div>
        </div>

    )
}
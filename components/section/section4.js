import styles from './section4.module.css'
import Image from "next/image";
import section4leftbar from "../../public/sectionImages/barcode_scan_girl.png";

export default function Section4() {
    return (

        <div className={styles.row}>
            <div className={styles.column}>
                <div className={styles.rightColumn }>
                    <Image className={styles.sectinoImages} src={section4leftbar} alt="Picture of the author" />

                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.leftColumn}>
                    <h4>Barcode Scan</h4>
                    {/*<div className={styles.line}></div>*/}
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div>
            </div>

        </div>

    )
}
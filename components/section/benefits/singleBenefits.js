import Image from "next/image";
import styles from './../sectionBenefits.module.css'
import Link from "next/link";



export default function SingleBenefits({images, title, url}) {

    return (

        <div className={styles.singleBenefits}>
            <Link href={url} >
                <a className={styles.singleBenefitsUrl}>
                    <img className={styles.singleBenefitsImages}  src={images} alt=""/>
                    {/*<Image className={styles.singleBenefitsImages}  src={images} alt="Picture of the author"  />*/}
                    <p className={styles.singleBenefitsTitle}>{title}</p>
                </a>
            </Link>
        </div>

    )
}
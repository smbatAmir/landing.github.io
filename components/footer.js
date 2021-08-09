import styles from './footer.module.css'
import Image from "next/image";
import section1RightBar from "../public/sectionImages/hero_section_guy.png";
import {Container, Grid} from "@material-ui/core";
import Link from "next/link";
 import chromeImg from '../public/chrom.png'
 import safariImg from '../public/safari.png'
 import appAndroidImg from '../public/Android.png'
 import appIosImg from '../public/IOS.png'

export default function Footer() {
    const footerColor = {
        background: '#272744',
        padding: '20px 0'
    }
    return (
            <Grid container style={footerColor}>
                <Container>
                    <Grid container>
                        <Grid column item md={3} >
                            <Grid  >
                                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="46" viewBox="0 0 74 46" fill="none">
                                    <path d="M28.9205 32.5964C28.9205 32.3933 28.9205 32.191 28.9205 31.8864L29.0217 29.8555" fill="white"/>
                                    <path d="M35.2167 36.7605C34.5059 31.1755 31.053 24.9797 29.2252 22.4411C28.6159 21.5272 27.4977 21.2237 26.4823 21.6299C25.5684 21.9345 24.9607 22.9492 25.0622 23.8631C25.3669 28.4326 25.1622 33.0025 24.4514 37.4705C24.2483 38.486 24.8579 39.5022 25.8734 39.8068C26.8888 40.0099 27.9051 39.4003 28.2097 38.3848V38.2837C28.3113 37.7759 28.412 37.2666 28.412 36.6573L31.1549 36.1496C31.2565 36.5558 31.2557 36.862 31.3572 37.2682C31.4588 38.2837 32.3727 39.0952 33.3881 38.9937C34.4036 38.8921 35.2151 37.9782 35.1136 36.9628C35.2151 36.8612 35.2167 36.862 35.2167 36.7605ZM28.9197 32.5956V31.8855L29.0209 29.8546C29.4271 30.667 29.7333 31.4794 30.1395 32.3933L28.9197 32.5956Z" fill="white"/>
                                    <path d="M41.7152 29.1439C41.7152 28.8392 41.7168 28.5338 41.8183 28.3307L42.0206 25.0821V24.6755C42.0206 24.3708 42.0206 24.0658 42.0206 23.7612L41.7152 29.1439ZM50.4496 36.3531C49.8403 31.9867 48.7222 27.8234 47.199 23.66C45.8789 20.0044 44.2554 16.4499 42.326 13.099C41.7168 11.982 40.3951 11.5766 39.1765 11.8812C38.0596 12.2874 37.2484 13.3024 37.3499 14.521C37.4515 21.6291 37.1472 28.8384 36.2333 35.9466C36.0302 37.2667 36.9441 38.4844 38.2642 38.6875C38.2642 38.6875 38.2638 38.6875 38.3654 38.6875C39.6855 38.789 40.9036 37.8755 41.0051 36.5554C41.1067 35.7431 41.209 34.9307 41.3106 34.0168L45.1681 33.6102C45.3712 34.7272 45.5743 35.8454 45.6758 36.8609C45.7774 38.0794 46.7936 38.9929 48.0121 38.9929C48.1137 38.9929 48.214 38.9929 48.3156 38.9929C49.6357 38.7898 50.6527 37.6732 50.4496 36.3531ZM41.7152 29.1439V28.3307L41.9194 25.0821V24.6755V23.7612C42.1225 24.3704 42.4264 24.8774 42.6295 25.4866C43.0357 26.7052 43.443 27.9237 43.8492 29.0407L41.7152 29.1439Z" fill="white"/>
                                    <path d="M73.9063 40.1114C71.7739 24.575 63.9545 7.61704 60.2989 2.03207C59.1819 0.305811 57.151 -0.40421 55.2217 0.306604C53.3939 1.01742 52.2777 2.84523 52.4808 4.87613C53.09 12.5935 53.19 25.2863 51.3622 35.4408C50.956 37.2686 52.1757 39.1975 54.1051 39.6037C55.9329 39.9083 57.6595 38.6906 58.0657 36.8628V36.7616C58.2688 35.2385 58.5727 33.8168 58.7757 32.1921L65.275 31.379C66.1889 34.6284 66.7982 37.8774 67.3059 41.1269C67.509 42.8531 68.9294 44.1732 70.6557 44.1732C70.8588 44.1732 70.9603 44.1732 71.1634 44.1732C72.8897 43.8686 74.211 42.0408 73.9063 40.1114ZM59.3846 24.9808C59.6892 21.6298 59.69 15.6395 59.69 15.6395C61.1117 18.9905 63.143 24.5762 63.143 24.5762L59.3846 24.9808Z" fill="white"/>
                                    <path d="M12.3708 37.1642L9.93332 32.6978C9.73023 32.2916 9.2229 32.1893 8.81672 32.3924L6.4804 33.6101C6.07422 33.8132 5.97188 34.3225 6.17497 34.7287L8.71359 39.3994V39.5005C9.11977 40.3129 8.81593 41.3275 8.00357 41.7337C7.19121 42.1399 6.17655 41.836 5.77037 41.0237L3.94177 37.5707C3.43405 36.5553 2.11317 36.1503 1.09772 36.7596C0.0822721 37.2673 -0.322718 38.5862 0.286552 39.6016L2.11317 42.9534C3.12862 44.8828 5.1611 45.9998 7.29355 45.9998C8.309 45.9998 9.22211 45.7955 10.0345 45.2878C12.7762 43.663 13.894 40.109 12.3708 37.1642ZM9.83217 35.3376C9.83217 35.4391 9.72904 35.4387 9.72904 35.4387H9.12017C9.01862 35.4387 9.01902 35.4383 9.01902 35.5399L8.71359 36.0476C8.71359 36.0476 8.61244 36.0472 8.61244 36.1487C8.5109 36.1487 8.41014 36.1491 8.41014 36.0476L8.20586 35.5399C8.20586 35.4383 8.10472 35.4387 8.10472 35.4387L7.59699 35.2364C7.59699 35.2364 7.49584 35.2348 7.49584 35.1333C7.49584 35.0317 7.49584 34.931 7.49584 34.931L8.00357 34.6256L8.10472 34.5244V33.9155V33.8144H8.20586H8.309L8.81672 34.1178C8.81672 34.1178 8.81633 34.1178 8.91787 34.1178L9.42559 33.9155H9.52674C9.62829 33.9155 9.62789 34.0163 9.62789 34.1178L9.42559 34.6256V34.7287L9.72904 35.1333C9.83058 35.2348 9.83217 35.3376 9.83217 35.3376Z" fill="white"/>
                                    <path d="M5.64532 30.2979L5.84841 30.8056L5.94995 30.9072L6.45768 31.0087C6.55922 30.9072 6.66077 31.0087 6.66077 31.0087V31.1103L6.25459 31.5165V31.618L6.35613 32.1257C6.35613 32.2273 6.35613 32.2273 6.25459 32.2273H6.15304L5.64532 32.0242H5.54377L5.13759 32.3288C5.03605 32.3288 5.03605 32.3288 4.9345 32.3288V32.2273L5.03605 31.7195V31.618L4.62987 31.3134C4.52832 31.3134 4.52832 31.2118 4.62987 31.1103C4.62987 31.1103 4.62987 31.1103 4.73141 31.1103L5.23914 31.0087C5.23914 31.0087 5.34068 31.0087 5.34068 30.9072L5.54377 30.3995C5.44223 30.2979 5.54377 30.1964 5.64532 30.2979Z" fill="white"/>
                                    <path d="M8.83602 31.0643V31.1658C8.83602 31.1658 8.83602 31.1658 8.73448 31.1658H8.3283C8.3283 31.1658 8.22675 31.1658 8.22675 31.2674L8.12521 31.6736C8.12521 31.6736 8.02366 31.7751 8.02366 31.6736L7.82057 31.2674C7.82057 31.2674 7.82057 31.2674 7.71903 31.2674H7.31285L7.2113 31.1658L7.61748 30.7597C7.61748 30.7597 7.61748 30.7597 7.61748 30.6581L7.51594 30.2519C7.51594 30.2519 7.51594 30.1504 7.61748 30.1504C7.61748 30.1504 7.61748 30.1504 7.71903 30.1504L8.02366 30.3535H8.12521L8.42984 30.1504H8.53139C8.53139 30.1504 8.53139 30.1504 8.53139 30.2519V30.6581V30.7597L8.83602 31.0643Z" fill="white"/>
                                    <path d="M6.57774 28.1115L6.67929 28.4162C6.67929 28.4162 6.67928 28.4162 6.78083 28.5177L7.08546 28.6193L7.18701 28.7208L6.78083 28.9239C6.78083 28.9239 6.78083 28.9239 6.78083 29.0254V29.3301C6.78083 29.3301 6.78083 29.4316 6.67929 29.4316L6.37465 29.127C6.37465 29.127 6.37465 29.127 6.27311 29.127L5.96847 29.2285H5.86693C5.86693 29.2285 5.86693 29.2285 5.86693 29.127L5.96847 28.8224V28.7208L5.76538 28.5177V28.4162H6.07002H6.17156L6.37465 28.1115C6.37465 28.1115 6.4762 28.01 6.57774 28.1115C6.4762 28.1115 6.57774 28.1115 6.57774 28.1115Z" fill="white"/>
                                    <path d="M4.22123 27.4768L4.42432 27.6799C4.42432 27.6799 4.42432 27.6799 4.52586 27.6799L4.72895 27.5783H4.8305L4.72895 27.883C4.72895 27.883 4.72895 27.883 4.72895 27.9845L4.8305 28.1876V28.2891H4.52586C4.52586 28.2891 4.52586 28.2891 4.42432 28.2891L4.32277 28.4922H4.22123L4.11968 28.1876L3.91659 28.086C3.91659 28.086 3.81505 27.9845 3.91659 27.9845L4.11968 27.883C4.11968 27.883 4.11968 27.883 4.11968 27.7814V27.4768C4.11968 27.4768 4.11968 27.3752 4.22123 27.4768C4.22123 27.3752 4.22123 27.4768 4.22123 27.4768Z" fill="white"/>
                                    <path d="M64.8678 0.101148V0.712004C64.8678 0.712004 64.8674 0.813153 64.9689 0.813153H65.4767C65.4767 0.813153 65.5778 0.812756 65.5778 0.914301V2.9452C65.5778 2.9452 65.5794 3.04635 65.681 3.04635H66.2898C66.2898 3.04635 66.391 3.04674 66.391 2.9452V0.914301C66.391 0.914301 66.3906 0.813153 66.4921 0.813153H66.9998C66.9998 0.813153 67.101 0.813549 67.101 0.712004V0.101148C67.101 0.101148 67.1014 0 66.9998 0L64.8678 0.101148Z" fill="white"/>
                                    <path d="M69.6395 0.101562L68.9295 1.32129H68.8283L68.1163 0.101562H67.4063C67.4063 0.101562 67.3052 0.103149 67.3052 0.204694V3.04676C67.3052 3.04676 67.3048 3.14791 67.4063 3.14791H68.0152C68.0152 3.14791 68.1163 3.14831 68.1163 3.04676V1.82902C68.1163 1.82902 68.1179 1.72787 68.2195 1.72787C68.2195 1.72787 68.2191 1.72787 68.3206 1.72787L68.8283 2.64019C68.8283 2.64019 68.828 2.64019 68.9295 2.64019H69.1318C69.1318 2.64019 69.1334 2.64019 69.2349 2.64019L69.7427 1.72787H69.8438C69.8438 1.72787 69.8438 1.72747 69.8438 1.82902V3.04676C69.8438 3.04676 69.8434 3.14791 69.9449 3.14791H70.5538C70.5538 3.14791 70.655 3.14831 70.655 3.04676V0.204694C70.655 0.204694 70.6554 0.101562 70.5538 0.101562H69.6395C69.7411 0.101562 69.6395 0.101562 69.6395 0.101562Z" fill="white"/>
                                    <path d="M23.0329 37.5728C22.322 36.862 21.5093 36.1511 20.5954 35.5419C21.3062 34.7295 21.712 33.6121 21.712 32.5967C21.712 30.4642 20.2899 28.7392 18.2591 28.2314C16.2282 27.7237 14.0957 28.7396 13.1818 30.6689C12.5725 32.0905 12.5725 33.7153 13.1818 35.2384C13.8926 36.9647 14.4003 38.7917 14.705 40.518C14.9081 41.5334 15.8216 42.1431 16.837 41.94C17.8525 41.7369 18.5633 40.7203 18.3602 39.7048C18.2587 39.0955 18.1583 38.5882 18.0568 38.0805C18.9707 38.5882 19.8846 39.299 20.5954 40.1114C21.3062 40.8222 22.4228 40.8222 23.2351 40.1114C23.7429 39.5021 23.7437 38.2836 23.0329 37.5728ZM17.9556 33.1044C17.651 33.7137 16.6351 33.9172 16.5336 34.0187C16.5336 34.0187 16.2282 33.3087 16.2282 32.801C16.2282 32.6994 16.2278 32.4959 16.3293 32.3944C16.5324 31.9882 17.1429 31.7847 17.549 31.9878C17.9552 32.0893 18.1587 32.6982 17.9556 33.1044Z" fill="white"/>
                                </svg>
                            </Grid>
                            <Grid container >
                                <Grid column item md={6} spacing={2}>
                                    <div className={styles.joinButtonArea}>
                                        <Link   href="">
                                            <a className={styles.joinButton} > Join Uraaa!</a>
                                        </Link>
                                    </div>
                                </Grid>
                                <Grid column item md={6} spacing={2}>
                                    <div className={styles.joinButtonAreaLogin}>
                                        <Link   href="">
                                            <a className={styles.joinButtonLogin} > log in</a>
                                        </Link>
                                    </div>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid column item md={3}>
                            <ul className={styles.ionfoSecondBar}>
                                <li>
                                    <p>What is Uraaa ?</p>
                                </li>
                                <li>
                                    <p>mobile app & Website</p>
                                </li>
                                <li>
                                    <p>Web extension</p>
                                </li>
                            </ul>
                            <ul className={styles.ionfoSecondBarSecond}>
                                <li>
                                    <Image  className={styles.brimages} src={chromeImg} alt="Picture of the chrome" />
                                        Chrome
                                </li>
                                <li>
                                    <Image className={styles.brimages}  src={safariImg} alt="Picture of the safari" />
                                    Safari
                                </li>
                            </ul>
                        </Grid>
                        <Grid column item md={3}>
                            <ul className={styles.ionfoSecondBar}>
                                <li>
                                    <p>Barcode Scan</p>
                                </li>
                                <li>
                                    <p>Benefits</p>
                                </li>
                                <li>
                                    <p>What’s new ? </p>
                                </li>
                                <li>
                                    <p>FAQ </p>
                                </li>
                                <li>
                                    <p>contacts </p>
                                </li>
                                <li>
                                    <p>Privacy policy </p>
                                </li>
                            </ul>
                        </Grid>
                        <Grid column item md={3}>
                            <ul className={styles.ionfoSecondBar}>
                                <li>
                                    <p>Uraaa! Mobile app:</p>
                                </li>
                                <li>
                                    <Image className={styles.appImages}  src={appIosImg} alt="Picture of the ios" />

                                </li>
                                <li>
                                    <Image className={styles.appImages}  src={appAndroidImg} alt="Picture of the android" />

                                </li>

                            </ul>
                        </Grid>
                    </Grid>
                    <Grid container className={styles.line}>

                    </Grid>
                    <Grid container>
                        <Grid column item md={6} spacing={3}>
                            <p className={styles.footerText}>© Uraaa 2021: All rights recerved</p>
                        </Grid>
                        <Grid column item md={6} spacing={3} alignContent="flex-end">
                            <p className={styles.footerText}>Follow us:</p>
                        </Grid>

                    </Grid>
                </Container>


            </Grid>
    )
}
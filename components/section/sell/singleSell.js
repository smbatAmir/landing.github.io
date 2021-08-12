import Image from "next/image";
import styles from './../sectionSelling.module.css'
import Link from "next/link";
import {useEffect, useState} from 'react'
import {Grid} from "@material-ui/core";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


export default function SingleSelling({id,icon, question, answer, delay}) {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    const itemsStyles = {
        width: '100%'

    }
    const [count, setCount] = useState();
    const [myClick, setmyClick] = useState(true);
    const [asnwerVal, setasnwerVal] = useState({display: 'none'});
    const [questionVal, setquestionVal] = useState();
    const [clickmeVal, setclickmeVal] = useState();
    const [iconColor, seticonColor] = useState();
    const [clickId, setclickId] = useState();

    const handleClick = (event) => {
        event.preventDefault();
        if (myClick == false) {
            setmyClick(true)
            setclickId(false);

        } else {
            setmyClick(false)
            setclickId(true);
        }
        if (myClick == true) {
            setCount({background: 'linear-gradient(142.77deg, #FF7518 -0.83%, #FF410D 100.83%)', color: '#fff'})
            setasnwerVal({display: 'inline-block'})
            setclickmeVal({display: 'none'})
            seticonColor({color: '#FFF'})
            setquestionVal({color:'#FFAF7A'})

        } else {
            setCount({backgroundColor: '#fff'})
            setasnwerVal({display: 'none'})
            setclickmeVal({display: 'inline-block'})
            seticonColor({color: '#FF6600'})
            setquestionVal({color:'#272744'})


        }

    };

        return (
            <Grid column item lg={4} md={4} sm={12} xs={12}  spacing={3} style={itemsStyles}>
                <div data-aos="flip-left" data-aos-delay={delay}>
                    <div className={styles.singleSell} style={count} onClick={handleClick}>
                        <h2 className={styles.iconStyles} style={iconColor}>{icon}</h2>
                        <h4 style={questionVal} >{question}</h4>
                        <p className={styles.answeVal} style={asnwerVal}>{answer}</p>
                        <div  style={clickmeVal} className={styles.clMe}>
                            <svg  xmlns="http://www.w3.org/2000/svg" width="156" height="30" viewBox="0 0 156 30" fill="none">
                                <path d="M68.0103 21.18C66.7383 21.18 65.5863 20.904 64.5543 20.352C63.5343 19.788 62.7303 19.014 62.1423 18.03C61.5663 17.046 61.2783 15.936 61.2783 14.7C61.2783 13.464 61.5723 12.354 62.1603 11.37C62.7483 10.386 63.5523 9.618 64.5723 9.066C65.6043 8.502 66.7563 8.22 68.0283 8.22C69.0603 8.22 70.0023 8.4 70.8543 8.76C71.7063 9.12 72.4263 9.642 73.0143 10.326L71.5023 11.748C70.5903 10.764 69.4683 10.272 68.1363 10.272C67.2723 10.272 66.4983 10.464 65.8143 10.848C65.1303 11.22 64.5963 11.742 64.2123 12.414C63.8283 13.086 63.6363 13.848 63.6363 14.7C63.6363 15.552 63.8283 16.314 64.2123 16.986C64.5963 17.658 65.1303 18.186 65.8143 18.57C66.4983 18.942 67.2723 19.128 68.1363 19.128C69.4683 19.128 70.5903 18.63 71.5023 17.634L73.0143 19.074C72.4263 19.758 71.7003 20.28 70.8363 20.64C69.9843 21 69.0423 21.18 68.0103 21.18ZM75.2565 8.4H77.5965V19.02H84.1845V21H75.2565V8.4ZM86.0318 8.4H88.3718V21H86.0318V8.4ZM97.6119 21.18C96.3399 21.18 95.1879 20.904 94.1559 20.352C93.1359 19.788 92.3319 19.014 91.7439 18.03C91.1679 17.046 90.8799 15.936 90.8799 14.7C90.8799 13.464 91.1739 12.354 91.7619 11.37C92.3499 10.386 93.1539 9.618 94.1739 9.066C95.2059 8.502 96.3579 8.22 97.6299 8.22C98.6619 8.22 99.6039 8.4 100.456 8.76C101.308 9.12 102.028 9.642 102.616 10.326L101.104 11.748C100.192 10.764 99.0699 10.272 97.7379 10.272C96.8739 10.272 96.0999 10.464 95.4159 10.848C94.7319 11.22 94.1979 11.742 93.8139 12.414C93.4299 13.086 93.2379 13.848 93.2379 14.7C93.2379 15.552 93.4299 16.314 93.8139 16.986C94.1979 17.658 94.7319 18.186 95.4159 18.57C96.0999 18.942 96.8739 19.128 97.7379 19.128C99.0699 19.128 100.192 18.63 101.104 17.634L102.616 19.074C102.028 19.758 101.302 20.28 100.438 20.64C99.5859 21 98.6439 21.18 97.6119 21.18ZM109.196 15.726L107.198 17.778V21H104.858V8.4H107.198V14.862L113.426 8.4H116.054L110.762 14.034L116.378 21H113.642L109.196 15.726ZM134.52 21L134.502 12.648L130.362 19.56H129.318L125.178 12.756V21H122.946V8.4H124.872L129.876 16.752L134.79 8.4H136.716L136.734 21H134.52ZM149.587 19.038V21H140.137V8.4H149.335V10.362H142.477V13.638H148.561V15.564H142.477V19.038H149.587ZM151.692 8.4H154.356L153.906 16.824H152.124L151.692 8.4ZM153.024 21.126C152.604 21.126 152.256 20.994 151.98 20.73C151.704 20.454 151.566 20.118 151.566 19.722C151.566 19.326 151.704 18.996 151.98 18.732C152.256 18.468 152.604 18.336 153.024 18.336C153.432 18.336 153.768 18.468 154.032 18.732C154.308 18.996 154.446 19.326 154.446 19.722C154.446 20.118 154.308 20.454 154.032 20.73C153.768 20.994 153.432 21.126 153.024 21.126Z" fill="#FF7E27"/>
                                <line x1="44" y1="15.5" x2="-4.37114e-08" y2="15.5" stroke="#FF7E27"/>
                            </svg>
                        </div>
                        {/*<input name={id + '_iniput'} id={id + '_iniput'} value={[id, clickId]} type="text"/>*/}
                    </div>
                </div>
            </Grid>

        )
    }

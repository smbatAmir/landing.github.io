import Image from "next/image";
import styles from './../sectionSelling.module.css'
import Link from "next/link";
import { useState } from 'react'
import {Grid} from "@material-ui/core";



export default function SingleSelling({id,icon, question, answer}) {
const itemsStyles = {
    width:'100%'
}
    const [count, setCount] = useState();
    const [myClick, setmyClick] = useState(true);
    const [asnwerVal, setasnwerVal] = useState({display: 'none'});
    const [clickmeVal, setclickmeVal] = useState();
    const [iconColor, seticonColor] = useState();


    const handleClick = (event) => {
        event.preventDefault();
        if(myClick == false){
            setmyClick(true)

        }else{
            setmyClick(false)
        }
        if(myClick == true){
            setCount({background: 'linear-gradient(142.77deg, #FF7518 -0.83%, #FF410D 100.83%)', color: '#fff'})
            setasnwerVal({display:'inline-block'})
            setclickmeVal({display:'none'})
            seticonColor({color: '#FFF'})

        }else {
            setCount({backgroundColor: '#fff'})
            setasnwerVal({display:'none'})
            setclickmeVal({display:'inline-block'})
            seticonColor({color: '#FF6600'})
        }
        console.log(count)

    };
    return (
        <Grid column item md={4} spacing={3} style={itemsStyles}>
            <div className={styles.singleSell} style={count}  onClick={handleClick}>
                <h2 className={styles.iconStyles} style={iconColor}>{icon}</h2>
                <h4>{question}</h4>
                <div className={styles.lineandMore}>
                    <p style={asnwerVal}>{answer}</p>
                    <div className={styles.lineDiv} style={clickmeVal} ></div>
                    <p className={styles.clickMe} style={clickmeVal}>CLICK ME!</p>
                </div>

            </div>

        </Grid>

    )
}
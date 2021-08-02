import styles from './sectionSelling.module.css'
import SingleSelling from "./sell/singleSell";
import Link from 'next/link'

import SingleBenefits from "./benefits/singleBenefits";
import { BiRocket } from 'react-icons/bi';
import { BsBarChart } from 'react-icons/bs';
import { FiTrendingUp } from 'react-icons/fi';
import {useState} from "react";

export default function Selling() {


    var answerArray = [
        {
            id:1,
            icon :<BiRocket/>,
            question :'Dont willing to do more effort ?',
            answer :'No more efforts'
        },
        {
            id:2,
            icon :<BsBarChart/>,
            question :'Want to decrees purchase acquisition cost',
            answer :'No more efforts'
        },
        {
            id:3,
            icon :<FiTrendingUp/>,
            question :'Want to raise revenue ?',
            answer :'No more efforts'
        }
    ]

    const sellBG = {
        backgroundImage: 'url("sectionImages/tab.png")',
        backgroundSize: 'cover',
        width: '77%',
        margin: '0 auto'

        // backgroundPosition:'center',
    }


    return (
<>
        <div className={styles.row}>

            <div className={styles.column}>
                <div className={styles.rightColumn }>

                </div>
            </div>
            <div className={styles.column}>
                <div className={styles.leftColumn}>
                    <h3 >Start Selling</h3>
                    <h4 >With No Effort, $0 acqusition coast, Higer revenue...</h4>

                </div>
            </div>
        </div>
    <div className={styles.row} style={sellBG}>
            {answerArray.map((answer) => (
                <div className={styles.threColumn} key={answer.id}>
                    <SingleSelling
                        id = {answer.id}
                        icon = {answer.icon}
                        question = {answer.question}
                        answer = {answer.answer}

                    />
                </div>
            ))}

    </div>
    <div className={styles.row}>
        <div className={styles.column}>
           <Link   href="">
               <a className={styles.joinButton} > Join Uraaa!</a>
           </Link>
        </div>
    </div>
        </>
    )
}
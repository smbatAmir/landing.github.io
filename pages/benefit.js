import React from 'react';
import Image from "next/image";
import {Container, Grid} from "@material-ui/core";
import SingleFaq from "./../components/section/faq/singlefaq";
import styles from './../components/section/sectionFAQ.module.css'
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Contact from "../components/section/sectionContact";
import BenefitsAll from '../components/section/sectionBenefits'


export default function Benefits() {

    return (

        <Container>
            <Grid container >
                <Grid column item lg={6} md={6} sm={12} xs={12}  spacing={3}>
                    <h4 className={styles.textTitle}>Benefits</h4>
                    <div className={styles.line}></div>
                </Grid>
            </Grid>
            <BenefitsAll />
        </Container>
    )
}

Benefits.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}

        </Layout>
    )
}
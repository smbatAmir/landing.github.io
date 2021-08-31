import React from "react";
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Section1 from "../components/Home/section1";
import Section2 from "../components/section/section2";
import Section3 from "../components/Home/section3";
import Section4 from "../components/Home/section4";
import Selling from "../components/section/sectionSelling";
import Section5 from "../components/section/section5";

export default function Home({homeData}) {
    const item = homeData;
    console.log("homeAllData______________________", homeData);

    return (
        <>
            <Section1 homeData={item[0]}/>
            <Section3 homeData={item[1]}/>
            <Section4 homeData={item[2]}/>
            <Section5/>
            <Section2/>
            <Selling/>
        </>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar/>
            {page}
        </Layout>
    )
}

export async function getStaticProps() {
    const homeData = await fetch("https://api-settings.uraaa.com/banners/all?settingName=Home")
        .then(
            (res) => res.json()
        );

    return {
        props: {
            homeData: homeData.banners
        }
    }
}

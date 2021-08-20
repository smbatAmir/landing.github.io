import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import Section1 from "../components/section/section1";
import Section2 from "../components/section/section2";
import Section3 from "../components/section/section3";
import Section4 from "../components/section/section4";
import Benefits from "../components/section/sectionBenefits";
import Selling from "../components/section/sectionSelling";
import News from "../components/section/sectionNews";
import Faqs from "../components/section/sectionFAQ";
import Contact from "../components/section/sectionContact";
import Section5 from "../components/section/section5";

export default function Index() {
  return (
      <>

          <Section1 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section2 />
          {/*<Benefits />*/}
          <Selling />
          {/*<News />*/}
          {/*<Faqs/>*/}
          {/*<Contact />*/}

      </>
  )
}

Index.getLayout = function getLayout(page) {
  return (
      <Layout>
          <Sidebar />
            {page}
      </Layout>
  )
}
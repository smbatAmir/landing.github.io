import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function About() {
    return (
        <section>
            <h2>Layout Example (About)</h2>

            <p>
                This layout pattern will allow for state persistence because the React
                component tree is persisted between page transitions. To preserve state,
                we need to prevent the React component tree from being discarded between
                page transitions.
            </p>
            <h3>Try It Out</h3>
           
        </section>
    )
}

About.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}
        </Layout>
    )
}
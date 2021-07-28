import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function Login() {
    return (
        <section>

        </section>
    )
}

Login.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Sidebar />
            {page}
        </Layout>
    )
}
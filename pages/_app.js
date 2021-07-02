import Layout from "../components/Layout/Layout";

import "./../styles/base.global.scss";
import "./../styles/utililty.global.scss";

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

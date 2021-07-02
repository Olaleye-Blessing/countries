// import { GlobalProvider } from "../context/globalContext";
import Layout from "../components/Layout/Layout";

import "./../styles/base.global.scss";
import "./../styles/utililty.global.scss";

function MyApp({ Component, pageProps }) {
    return (
        // <GlobalProvider>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        // </GlobalProvider>
    );
}

export default MyApp;

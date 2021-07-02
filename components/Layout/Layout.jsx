import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="Get information about different countries"
                />
                <meta name="revised" content="7/2/2021" />
                <meta name="Authur" content="Olaleye Blessing" />
                <meta
                    httpEquiv="Content-Type"
                    content="text/html; charset = UTF-8"
                />
                <title>TRIDATON</title>
            </Head>
            <Navbar />
            <>{children}</>
            <Footer />
        </>
    );
};

export default Layout;

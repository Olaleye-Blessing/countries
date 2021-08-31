import Head from "next/head";

import Country from "../../components/country";

const CountryDetail = ({ country }) => {
    country = country[0];

    let { name } = country;

    return (
        <>
            <Head>
                <title>TRIDATON || {name}</title>
                <meta name="description" content={`${name}'s information`} />
            </Head>
            <Country {...country} />
        </>
    );
};

export const getStaticPaths = async () => {
    let req = await fetch(`https://restcountries.eu/rest/v2/all`);
    let countries = await req.json();

    let paths = countries.map((country) => {
        return {
            params: { country: country.alpha3Code },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async (context) => {
    let name = context.params.country;

    let req = await fetch(
        `https://restcountries.eu/rest/v2/alpha?codes=${name}`
    );
    let country = await req.json();

    return {
        props: {
            country,
        },
    };
};

export default CountryDetail;

import Image from "next/image";
import Link from "next/link";

import countryStyle from "./Country.module.scss";

const CountryDetail = ({ country }) => {
    country = country[0];

    let {
        name,
        flag,
        region,
        population,
        area,
        capital,
        languages,
        currencies,
        nativeName,
        borders,
    } = country;

    const getLangs = () => languages.map((lang) => lang.name).join(", ");

    const getCurrencies = () =>
        `${currencies[0].name} (${currencies[0].symbol})`;

    return (
        <main className={`${countryStyle.country} width`}>
            <section className={`${countryStyle.country__sub} box`}>
                <figure className={`${countryStyle.country__flag}`}>
                    <Image
                        src={flag}
                        alt={`${name}'s flag`}
                        width={100}
                        height={70}
                        layout="responsive"
                    />
                </figure>
                <div>
                    <h2 className={`${countryStyle.country__name}`}>{name}</h2>
                    <div className={`${countryStyle.country__region}`}>
                        {region}
                    </div>
                </div>
                <div className={`${countryStyle.country__density}`}>
                    <div className={`${countryStyle.country__population}`}>
                        <span>{population}</span>
                        <span>Population</span>
                    </div>
                    <div className={`${countryStyle.country__area}`}>
                        <span>{area}</span>
                        <span>Area</span>
                    </div>
                </div>
            </section>
            <section className={`${countryStyle.country__main} box`}>
                <h3>Detail</h3>
                <p>
                    <span>Capital</span>
                    <span>{capital}</span>
                </p>
                <p>
                    <span>Languages</span>
                    <span>{getLangs()}</span>
                </p>
                <p>
                    <span>Currencies</span>
                    <span>{getCurrencies()}</span>
                </p>
                <p>
                    <span>Native name</span>
                    <span>{nativeName}</span>
                </p>
                <div className={`${countryStyle.country__borders}`}>
                    <h4>Neighbouring Countries</h4>
                    <div>
                        {borders.map((border) => {
                            return (
                                <Link
                                    key={border}
                                    href={`/countries/${border}`}
                                >
                                    <a
                                        className={`${countryStyle["country__borders-link"]} btn`}
                                    >
                                        <figure>
                                            <Image
                                                src={`https://restcountries.eu/data/${border.toLowerCase()}.svg`}
                                                alt="flag"
                                                width={100}
                                                height={70}
                                                layout="responsive"
                                            />
                                        </figure>
                                        <div
                                            style={{
                                                textAlign: "center",
                                                marginTop: "5px",
                                            }}
                                        >
                                            {border}
                                        </div>
                                    </a>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
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

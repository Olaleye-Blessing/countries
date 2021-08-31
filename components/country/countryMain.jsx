import CountryBorders from "./countryBorders";

import countryStyle from "./../../pages/countries/Country.module.scss";

const CountryMain = ({
    capital,
    nativeName,
    borders,
    languages,
    currencies,
}) => {
    const getLangs = () => languages.map((lang) => lang.name).join(", ");

    const getCurrencies = () =>
        `${currencies[0].name} (${currencies[0].symbol})`;

    return (
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
            {borders.length > 0 && <CountryBorders borders={borders} />}
        </section>
    );
};

export default CountryMain;

import CountryHeader from "./countryHeader";
import CountryMain from "./countryMain";
import countryStyle from "./../../pages/countries/Country.module.scss";

const Country = (props) => {
    return (
        <main className={`${countryStyle.country} width`}>
            <CountryHeader {...props} />
            <CountryMain {...props} />
        </main>
    );
};

export default Country;

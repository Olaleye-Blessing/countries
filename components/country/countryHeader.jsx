import Image from "next/image";

import countryStyle from "./../../pages/countries/Country.module.scss";

const CountryHeader = ({ flag, name, region, population, area }) => {
    return (
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
                    <span>Population</span>
                    <span>{population}</span>
                </div>
                <div className={`${countryStyle.country__area}`}>
                    <span>Area</span>
                    <span>{area}</span>
                </div>
            </div>
        </section>
    );
};

export default CountryHeader;

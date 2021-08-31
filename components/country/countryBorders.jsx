import Link from "next/link";
import Image from "next/image";

import countryStyle from "./../../pages/countries/Country.module.scss";

const CountryBorders = ({ borders }) => {
    return (
        <div className={`${countryStyle.country__borders}`}>
            <h4>Neighbouring Countries</h4>
            <div>
                {borders.map((border) => {
                    return (
                        <Link key={border} href={`/countries/${border}`}>
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
    );
};

export default CountryBorders;

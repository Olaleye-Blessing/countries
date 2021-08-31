import { useState } from "react";
import Table from "../components/Table/Table.jsx";
import Form from "./../components/Form/Form";

export const getStaticProps = async () => {
    try {
        let req = await fetch(`https://restcountries.eu/rest/v2/all`);
        let countries = await req.json();

        return {
            props: {
                countries,
            },
        };
    } catch (error) {
        console.log(error);
    }
};

export default function Home({ countries }) {
    const [countrySearch, setCountrySearch] = useState("");
    let tableHeadRows = [
        { label: "name", sortable: true },
        { label: "alpha3Code", sortable: true },
        { label: "capital", sortable: true },
        { label: "population", sortable: true },
    ];

    let filteredCountries = [...countries];

    if (countrySearch) {
        let search = countrySearch.toLowerCase();
        filteredCountries = [...countries].filter(
            (country) =>
                country.name.toLowerCase().includes(search) ||
                country.capital.toLowerCase().includes(search) ||
                country.region.toLowerCase().includes(search) ||
                country.subregion.toLowerCase().includes(search) ||
                country.alpha3Code.toLowerCase().includes(search)
        );
    }

    let countriesData = filteredCountries.map((country) => {
        let { flag, name, alpha3Code, capital, population } = country;
        return { flag, name, alpha3Code, capital, population };
    });

    let searchLength = countriesData.length;

    return (
        <main className="width">
            <Form onSearch={setCountrySearch} countriesLength={searchLength} />
            <Table data={countriesData} rows={tableHeadRows} />
        </main>
    );
}

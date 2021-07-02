import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableStyle from "./Table.module.scss";
import { useState } from "react";

const Table = ({ data, rows }) => {
    const [sorting, setSorting] = useState({ label: "", order: "" });

    let sortedData = data;

    const sortData = () => {
        let sorted;
        switch (sorting.label) {
            case "name":
            case "capital":
            case "alpha3Code":
                sorted = data.sort((a, b) => {
                    if (sorting.order === "asc") {
                        if (a[sorting.label] < b[sorting.label]) return -1;
                        if (a[sorting.label] > b[sorting.label]) return 1;
                        return 0;
                    } else {
                        if (a[sorting.label] > b[sorting.label]) return -1;
                        if (a[sorting.label] < b[sorting.label]) return 1;
                        return 0;
                    }
                });
            case "population":
                sorted = data.sort((a, b) => {
                    return sorting.order === "asc"
                        ? a[sorting.label] - b[sorting.label]
                        : b[sorting.label] - a[sorting.label];
                });
        }
        return sorted;
    };

    if (sorting.label) {
        sortedData = sortData();
    }

    return (
        <table className={`${TableStyle.table} width`}>
            <TableHeader
                headers={rows}
                onSorting={(label, order) => setSorting({ label, order })}
            />
            <TableBody data={sortedData} />
        </table>
    );
};

export default Table;

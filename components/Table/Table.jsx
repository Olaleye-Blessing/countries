import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableStyle from "./Table.module.scss";
import { useState } from "react";

const Table = ({ data, rows }) => {
    const [sorting, setSorting] = useState({ label: "", order: "" });

    let sortedData = data;

    const sortData = () => {
        let sorted = data.sort((a, b) => {
            if (sorting.order === "asc") {
                // ascending
                return a[sorting.label] < b[sorting.label]
                    ? -1
                    : a[sorting.label] > b[sorting.label]
                    ? 1
                    : 0;
            } else {
                //descending
                return a[sorting.label] > b[sorting.label]
                    ? -1
                    : a[sorting.label] < b[sorting.label]
                    ? 1
                    : 0;
            }
        });

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

import { useState } from "react";
import TableStyle from "./Table.module.scss";
// import { AiFillCaretDown } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const TableHeader = ({ headers, onSorting }) => {
    const [sortingLabel, setSortingLabel] = useState("");
    const [sortingOrder, setsortingOrder] = useState("asc");

    const onSortingChange = (label) => {
        let order =
            label === sortingLabel && sortingOrder === "asc" ? "desc" : "asc";

        setSortingLabel(label);
        setsortingOrder(order);

        onSorting(label, order);
    };

    // console.log(sortingLabel);
    const showIcon = (label) => {
        if (!sortingLabel) return null;

        if (sortingLabel !== label) return null;

        return (
            <span className={TableStyle.table__icon}>
                {sortingOrder === "asc" ? (
                    <IoMdArrowDropup
                        className={`${TableStyle["table__icon-up"]}`}
                    />
                ) : (
                    <IoMdArrowDropdown
                        className={`${TableStyle["table__icon-down"]}`}
                    />
                )}
            </span>
        );
    };

    return (
        <thead className={TableStyle.thead}>
            <tr>
                {headers.map(({ label, sortable }) => {
                    return (
                        <th
                            key={label}
                            onClick={() => sortable && onSortingChange(label)}
                        >
                            <div>
                                <span>{label}</span>
                                {showIcon(label)}
                            </div>
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
};

export default TableHeader;

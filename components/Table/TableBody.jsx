import Image from "next/image";
import Link from "next/link";

import TableStyle from "./Table.module.scss";

const TableBody = ({ data }) => {
    return (
        <tbody className={TableStyle.tbody}>
            {data.map((dat) => {
                return (
                    <tr key={dat.name}>
                        <td className={TableStyle.td__country}>
                            <div>
                                <Image
                                    src={dat.flag}
                                    width={20}
                                    height={16}
                                    alt={`${dat.name}'s flag`}
                                />
                            </div>
                            <Link href={`/countries/${dat.alpha3Code}`}>
                                <a className="btn btn__link">{dat.name}</a>
                            </Link>
                        </td>
                        <td>{dat.alpha3Code}</td>
                        <td>{dat.capital || ""}</td>
                        <td>{dat.population}</td>
                    </tr>
                );
            })}
        </tbody>
    );
};

export default TableBody;

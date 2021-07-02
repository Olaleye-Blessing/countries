import { BiBarChart } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import Link from "next/link";

import NavStyle from "./Navbar.module.scss";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [theme, setTheme] = useState("dark");

    const switchTheme = () => {
        let newTheme = theme === "light" ? "dark" : "light";
        setTheme((prevTheme) => newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            localStorage.getItem("theme")
        );
        setTheme(localStorage.getItem("theme"));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <nav className={`width ${NavStyle.nav}`}>
            <Link href="/">
                <a className="home">
                    <div className="home__icon">
                        <BiBarChart />
                    </div>
                    <div className="home__name">TRIDATON</div>
                </a>
            </Link>
            <div>
                <button
                    className="toggle"
                    title="toggle mode"
                    onClick={switchTheme}
                >
                    <AiOutlineSetting />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

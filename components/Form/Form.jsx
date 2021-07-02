import { useRef } from "react";
import { FiSearch } from "react-icons/fi";

import formStyle from "./Form.module.scss";

const Form = ({ onSearch, countriesLength }) => {
    let inputRef = useRef();

    return (
        <section className={`${formStyle.form__cont}`}>
            <p className={`${formStyle.form__result}`}>
                {countriesLength} results
            </p>
            <form className={`${formStyle.form__form}`}>
                <div className={`${formStyle.form__divCont}`}>
                    <span className={`${formStyle.form__icon} `}>
                        <FiSearch />
                    </span>
                    <input
                        ref={inputRef}
                        type="search"
                        name="country"
                        id="search"
                        aria-label="filter by name, capital region, subregion..."
                        placeholder="filter by name, capital region, subregion..."
                        className={`${formStyle.form__input}`}
                        onChange={() => onSearch(inputRef.current.value)}
                    />
                </div>
            </form>
        </section>
    );
};

export default Form;

import React from "react";
import styles from "./search.module.scss";

const Search = ({
    className = "",
    placeholder = "",
    style = {},
    testId = "",
}): JSX.Element => {
    return (
        <input
            data-testid={testId}
            className={`${styles.search} ${className}`}
            placeholder={placeholder}
            style={style}
        />
    );
};

export default Search;

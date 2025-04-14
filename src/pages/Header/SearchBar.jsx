import React, { useContext } from "react";
import styles from "./SearchBar.module.scss";
import { FaSearch, FaPhone, FaTimes } from "react-icons/fa";
import GlobalContext from "../GlobalContext";

const SearchBar = () => {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const handleClear = () => {
        globalDispatch({ type: "setSearchText", payload: "" });
    };

    return (
        <div className={styles.searchBar}>
            <div className={styles.searchWrapper}>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        className={styles.searchInput}
                        value={globalState.searchText}
                        onChange={(e) =>
                            globalDispatch({
                                type: "setSearchText",
                                payload: e.target.value,
                            })
                        }
                    />
                    {globalState.searchText && (
                        <button
                            className={styles.clearButton}
                            onClick={handleClear}
                        >
                            <FaTimes />
                        </button>
                    )}
                    <button className={styles.searchButton}>
                        <FaSearch />
                    </button>
                </div>
                <button className={styles.contactButton}>
                    <FaPhone className={styles.phoneIcon} />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;

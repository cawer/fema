import React from "react";
import styles from "./Header.module.scss";
import { FaSearch, FaPhone } from "react-icons/fa";
import NavLinks from "./NavLinks";
import Logo from "./logo.png"; // Adjust the path as necessary

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={styles.topSection}>
                    <div className={styles.logoContainer}>
                        <img src={Logo} alt="Logo" className={styles.logo} />
                    </div>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Fina Essência by BFJH</h1>
                        <p className={styles.subtitle}>
                            Onde a elegância encontra seu nome
                        </p>
                    </div>
                </div>
                <div className={styles.searchBar}>
                    <div className={styles.searchWrapper}>
                        <div className={styles.searchContainer}>
                            <input
                                type="text"
                                placeholder="Pesquisar..."
                                className={styles.searchInput}
                            />
                            <button className={styles.searchButton}>
                                <FaSearch />
                            </button>
                        </div>
                        <button className={styles.contactButton}>
                            <FaPhone className={styles.phoneIcon} />
                        </button>
                    </div>
                </div>
            </header>
            <NavLinks />
        </div>
    );
};

export default Header;

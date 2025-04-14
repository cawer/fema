import React from "react";
import styles from "./Header.module.scss";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import Logo from "./logo.png";

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
                <SearchBar />
            </header>
            <NavLinks />
        </div>
    );
};

export default Header;

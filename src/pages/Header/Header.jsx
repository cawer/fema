import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
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
                        <Link to="/fema">
                            <img
                                src={Logo}
                                alt="Logo"
                                className={styles.logo}
                            />
                        </Link>
                    </div>
                    <div className={styles.titleContainer}>
                        <h1 className={styles.title}>Fina Essência by BFJH</h1>
                        <p className={styles.subtitle}>
                            Onde a elegância encontra seu nome
                        </p>
                    </div>
                    <div className={styles.cartContainer}>
                        <span className={styles.cartItems}>0 itens</span>
                        <FaShoppingCart className={styles.cartIcon} />
                    </div>
                </div>
                <SearchBar />
            </header>
            <NavLinks />
        </div>
    );
};

export default Header;

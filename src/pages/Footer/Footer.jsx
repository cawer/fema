import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>&copy; {currentYear} - Todos os direitos reservados</p>
        </footer>
    );
};

export default Footer;

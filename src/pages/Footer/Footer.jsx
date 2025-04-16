import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import FaleConosco from "./fale-conosco-2.png";

const Footer = () => {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }

        return () => {
            if (footerRef.current) {
                observer.unobserve(footerRef.current);
            }
        };
    }, []);

    return (
        <footer ref={footerRef} className={styles.footer}>
            <Link to="/fema/quem-somos">
                <img
                    src={FaleConosco}
                    alt="Fale Conosco"
                    className={`${styles.floatingImage} ${
                        isVisible ? styles.visible : ""
                    }`}
                />
            </Link>
            <p>
                &copy; {currentYear} - Página fictícia desenvolvida por alunos
                da FEMA
            </p>
        </footer>
    );
};

export default Footer;

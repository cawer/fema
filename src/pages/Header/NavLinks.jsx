import React, { useContext } from "react";
import styles from "./NavLinks.module.scss";
import GlobalContext from "../GlobalContext";

import infantil from "./imagens/infantil.avif";
import feminino from "./imagens/feminino.avif";
import masculino from "./imagens/masculino.avif";
import calcados from "./imagens/calcados.webp";

const NavLinks = () => {
    const { globalDispatch } = useContext(GlobalContext);

    const handleCategoryClick = (category) => {
        globalDispatch({ type: "setCategory", payload: category });
    };

    return (
        <div className={styles.navLinks}>
            <a
                href="#"
                className={styles.linkItem}
                onClick={() => handleCategoryClick("female")}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={feminino}
                        alt="Feminino"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Feminino</span>
            </a>
            <a
                href="#"
                className={styles.linkItem}
                onClick={() => handleCategoryClick("male")}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={masculino}
                        alt="masculino"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Masculino</span>
            </a>
            <a
                href="#"
                className={styles.linkItem}
                onClick={() => handleCategoryClick("kids")}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={infantil}
                        alt="infantil"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Infantil</span>
            </a>
            <a
                href="#"
                className={styles.linkItem}
                onClick={() => handleCategoryClick("shoes")}
            >
                <div className={styles.imageContainer}>
                    <img
                        src={calcados}
                        alt="Calçados"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Calçados</span>
            </a>
            <button className={styles.signupButton}>
                Cadastre-se agora e ganhe 10% de desconto
            </button>
        </div>
    );
};

export default NavLinks;

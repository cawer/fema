import React from "react";
import styles from "./NavLinks.module.scss";

import bebe from "./imagens/bebe.png";
import feminino from "./imagens/feminino.png";
import masculino from "./imagens/masculino.png";
import sapatos from "./imagens/sapatos.png";

const NavLinks = () => {
    return (
        <div className={styles.navLinks}>
            <a href="#" className={styles.linkItem}>
                <div className={styles.imageContainer}>
                    <img
                        src={feminino}
                        alt="Feminino"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Feminino</span>
            </a>
            <a href="#" className={styles.linkItem}>
                <div className={styles.imageContainer}>
                    <img
                        src={sapatos}
                        alt="Sapatos"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Sapatos</span>
            </a>
            <a href="#" className={styles.linkItem}>
                <div className={styles.imageContainer}>
                    <img
                        src={masculino}
                        alt="masculino"
                        className={styles.roundImage}
                    />
                </div>
                <span className={styles.linkText}>Masculino</span>
            </a>
            <a href="#" className={styles.linkItem}>
                <div className={styles.imageContainer}>
                    <img src={bebe} alt="bebe" className={styles.roundImage} />
                </div>
                <span className={styles.linkText}>Bebê</span>
            </a>
            <button className={styles.signupButton}>
                Cadastre-se agora e ganhe 10% de desconto
            </button>
        </div>
    );
};

export default NavLinks;

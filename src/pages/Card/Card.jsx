import React from "react";
import styles from "./Card.module.css";

const Card = ({ image, title, description, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={image} alt={title} className={styles.productImage} />
            </div>
            <div className={styles.contentContainer}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.footer}>
                    <span className={styles.price}>R$ {price}</span>
                    <button className={styles.buyButton}>Comprar</button>
                </div>
            </div>
        </div>
    );
};

export default Card;

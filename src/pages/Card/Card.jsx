import React from "react";
import styles from "./Card.module.css";

const formatPrice = (price) => {
    return Number(price).toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

const Card = ({ image, title, description, price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    alt={title}
                    className={`${styles.productImage}`}
                />
                <div className={styles.baseOverlay}>
                    <div>
                        <h3 className={styles.baseTitle}>{title}</h3>
                    </div>
                    <div className={styles.basePriceContainer}>
                        <span className={styles.basePrice}>
                            R$ {formatPrice(price)}
                        </span>
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <p className={styles.description}>{description}</p>
                    <div className={styles.footer}>
                        <span className={styles.price}>
                            R$ {formatPrice(price)}
                        </span>
                        <button className={styles.buyButton}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

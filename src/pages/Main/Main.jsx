import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../GlobalContext";
import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card/Card";

const images = import.meta.glob("./imagens/*.jfif", { eager: true });

export default function Main() {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const [data, setData] = useState([]);

    useEffect(() => {
        const loadImages = async () => {
            const imagesKeys = Object.keys(images);
            const imageArray = imagesKeys.map((key) => ({
                id: key,
                image: images[key].default, // acessando a URL da imagem
                name: "titulo",
                description: "descricao",
                price: 10,
            }));
            // Randomize the array
            imageArray.sort(() => Math.random() - 0.5);
            setData(imageArray);
        };

        loadImages();
    }, []);

    return (
        <div className="main">
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Novidades</h2>
                    {/* <FontAwesomeIcon icon={faPalette} className={styles.icon} /> */}
                </div>
                <div className={styles.cardContainer}>
                    {data.map((product) => (
                        <div
                            className={styles.cardContainerCardWrapper}
                            key={product.id}
                        >
                            <Card
                                key={product.id}
                                image={product.image}
                                title={product.name}
                                description={product.description}
                                price={product.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

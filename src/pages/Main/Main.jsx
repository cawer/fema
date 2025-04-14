import React, { useState, useEffect, useContext } from "react";
import GlobalContext from "../GlobalContext";
import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import Card from "../Card/Card";
import _data from "./data.json";

const images = import.meta.glob("./imagens/*.*", { eager: true });

export default function Main() {
    const { globalState, globalDispatch } = useContext(GlobalContext);

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        console.log(images);
        const dataWithImages = _data.map((item) => ({
            ...item,
            image: images[`./imagens/${item.image}`].default,
        }));
        // Randomize the order of the data
        dataWithImages.sort(() => Math.random() - 0.5);
        setData(dataWithImages);
    }, []);

    useEffect(() => {
        let filtered = data;

        if (globalState.category !== "all") {
            filtered = filtered.filter(
                (item) => item.category === globalState.category
            );
        }

        if (globalState.searchText) {
            const searchLower = globalState.searchText.toLowerCase();
            filtered = filtered.filter((item) =>
                item.title.toLowerCase().includes(searchLower)
            );
        }

        setFilteredData(filtered);
    }, [globalState.category, globalState.searchText, data]);

    return (
        <div className="main">
            <div className={styles.mainContainer}>
                <div className={styles.titleContainer}>
                    <h2 className={styles.title}>Novidades</h2>
                    {/* <FontAwesomeIcon icon={faPalette} className={styles.icon} /> */}
                </div>
                <div className={styles.cardContainer}>
                    {filteredData.map((product) => (
                        <div
                            className={styles.cardContainerCardWrapper}
                            key={product.image}
                        >
                            <Card
                                key={product.image}
                                image={product.image}
                                title={product.title}
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

import styles from "./About.module.scss";
import { Link } from "react-router-dom";
import fernanda from "./fernanda.png";
import bianca from "./bianca.png";
import heitor from "./heitor.png";
import joao from "./joao.png";

export default function About() {
    const developers = [
        {
            name: "Fernanda W.",
            image: fernanda,
        },
        {
            name: "Bianca K.",
            image: bianca,
        },
        {
            name: "João H.",
            image: joao,
        },

        {
            name: "Heitor O.",
            image: heitor,
        },
    ];

    return (
        <div className={styles.aboutWrapper}>
            <div className={styles.aboutContainer}>
                <Link to="/fema" className={styles.backLink}>
                    Voltar para a página inicial
                </Link>

                <p className={styles.paragraph}>
                    Esta é uma página fictícia desenvolvida por alunos da FEMA
                    para fins educacionais. O conteúdo aqui apresentado é
                    meramente ilustrativo e não representa uma empresa ou
                    serviço real.
                </p>
                <p className={styles.paragraph}>
                    Agradecemos pela visita e esperamos que você tenha uma ótima
                    experiência navegando por nosso site!
                </p>
                <p className={styles.paragraph}>
                    Este site foi desenvolvido inteiramente pelos alunos abaixo,
                    sem nenhuma ajuda do pai da Fernanda.{" "}
                    <span className={styles.confiaLink}>
                        Confia
                        <span className={styles.confiaPopup}>
                            <img
                                src="https://i.kym-cdn.com/entries/icons/original/000/036/622/agnes.jpg"
                                alt="Meme Confia"
                                className={styles.confiaImage}
                            />
                        </span>
                    </span>
                    .
                </p>

                <div className={styles.developersSection}>
                    <h2 className={styles.developersSectionTitle}>Alunos</h2>

                    <div className={styles.developersGrid}>
                        {developers.map((dev, index) => (
                            <div key={index} className={styles.developerCard}>
                                <img
                                    src={dev.image}
                                    alt={`Foto de ${dev.name}`}
                                    className={styles.developerImage}
                                />
                                <div className={styles.developerInfo}>
                                    <h3 className={styles.developerName}>
                                        {dev.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

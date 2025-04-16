import styles from "./About.module.scss";
import { Link } from "react-router-dom";

export default function About() {
    const developers = [
        {
            name: "Fernanda W.",
            role: "Desenvolvedora Front-end",
            image: "https://randomuser.me/api/portraits/women/44.jpg",
            bio: "Ana é estudante de Ciência da Computação na FEMA e apaixonada por desenvolvimento web. Quando não está codificando, adora assistir filmes de ficção científica e passear com seu cachorro.",
        },
        {
            name: "Bianca X",
            role: "Desenvolvedor Full-stack",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            bio: "Carlos está no último ano de Sistemas de Informação e é fã de videogames. Ele sempre diz que aprendeu lógica de programação jogando Zelda e que seu sonho é desenvolver um jogo indie.",
        },
        {
            name: "Júlia Ferreira",
            role: "Designer UX/UI",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            bio: "Júlia é especialista em design de interfaces e está sempre com um caderno de sketches por perto. Nas horas vagas, ela pinta quadros abstratos e coleciona plantas exóticas.",
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
                                <p className={styles.developerRole}>
                                    {dev.role}
                                </p>
                                <p className={styles.developerBio}>{dev.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

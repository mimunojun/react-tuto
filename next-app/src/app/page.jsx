import React from "react";
import HomeImage from "public/300sbsc.png";
import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>ども笑</h1>
                <p className={styles.desc}>
                    ボカロPとして、作編曲とか動画とかいろいろしています
                </p>
                <Button url="/works" text="See My Works" />
            </div>
            <div className={styles.item}>
                <Image
                    src={HomeImage}
                    alt="300sbsc"
                    className={styles.img}
                ></Image>
            </div>
        </div>
    );
};

export default Home;

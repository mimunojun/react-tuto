import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/15030874/pexels-photo-15030874.jpeg"
                    fill={true}
                    alt="monochrome street"
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>mochi-like creature</h1>
                    <h2 className={styles.imgDesc}>loving birdies</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Am I?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ratione at accusamus enim ex, minus fugit neque
                        repellendus dicta adipisci dignissimos, quia maiores
                        officia. Autem impedit, incidunt ab sunt consectetur
                        veritatis.
                        <br />
                        <br />
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Am I?</h1>
                    <p className={styles.desc}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ratione at accusamus enim ex, minus fugit neque
                        repellendus dicta adipisci dignissimos, quia maiores
                        officia. Autem impedit, incidunt ab sunt consectetur
                        veritatis.
                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    );
};

export default About;

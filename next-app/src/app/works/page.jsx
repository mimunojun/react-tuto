import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

const Works = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Choose a gallery</h1>
            <div className={styles.items}>
                <Link href="/works/illustrations" className={styles.item}>
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link href="/works/websites" className={styles.item}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href="/works/application" className={styles.item}>
                    <span className={styles.title}>Application</span>
                </Link>
            </div>
        </div>
    );
};

export default Works;

import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ text, href }) => {
    return (
        <div className={styles.div}>
            <Link href={href}>
                <button className={styles.button}>{text}</button>
            </Link>
        </div>
    );
};

export default Button;

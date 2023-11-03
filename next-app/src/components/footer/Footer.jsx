import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>(c)2023 すずめのめ All rights reserved.</div>
            <div className={styles.snsIcons}>
                <div className={styles.imgContainer}>
                    <Image src="/1.png" fill={true} alt="fb-icon"></Image>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/2.png" fill={true} alt="ig-icon"></Image>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/3.png" fill={true} alt="tw-icon"></Image>
                </div>
                <div className={styles.imgContainer}>
                    <Image src="/4.png" fill={true} alt="yt-icon"></Image>
                </div>
                <div>
                    <Image
                        src="/y2klogo.png"
                        width={120}
                        height={40}
                        className={styles.logo}
                        alt="suzumenome logo"
                    ></Image>
                </div>
            </div>
        </div>
    );
};

export default Footer;

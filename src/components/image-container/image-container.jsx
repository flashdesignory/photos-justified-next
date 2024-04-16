/* eslint-disable @next/next/no-img-element */
import styles from "./image-container.module.css";

export default function ImageContainer({src, alt, width, height}) {
    return (
        <div className={styles["image-container"]}>
            <img className={styles.image} src={src} alt={alt} width={width} height={height} />
        </div>
    )
}
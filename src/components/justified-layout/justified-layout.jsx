import ImageDisplay from "../image/image-display";
import styles from "./justified-layout.module.css";

export default function JustifiedLayout({ data = {items: [] } }) {
    return (
        <div className={styles["justified-layout-container"]}>
            <div className={styles["justified-layout-content"]}>
                {data.items.map((item) => <ImageDisplay key={item.id} data={item} />)}
            </div>
        </div>
    )
}
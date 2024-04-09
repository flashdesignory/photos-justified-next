import { useState } from "react";
import ImageDisplay from "../image/image-display";
import styles from "./justified-layout.module.css";

import { useResizeObserver } from "@/hooks/use-resize-observer/use-resize-observer";

export default function JustifiedLayout({ data = { items: [] } }) {
    const [containerWidth, setContainerWidth] = useState(-1);
    const { ref } = useResizeObserver({ callback: handleOnResize}); 

    function handleOnResize(entries) {
        for (let entry of entries) {
            console.log(containerWidth, entry.contentRect.width)

            if (containerWidth === entry.contentRect.width) {
                return;
            }

            setContainerWidth(entry.contentRect.width);
        }
    }

    return (
        <div className={styles["justified-layout-container"]} ref={ref}>
            <div className={styles["justified-layout-content"]}>
                {data.items.map((item) => (
                    <ImageDisplay key={item.id} data={item} />
                ))}
            </div>
        </div>
    );
}

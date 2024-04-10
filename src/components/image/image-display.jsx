import { useRef, useEffect } from "react";
import Image from "next/image";

import { useSize } from "@/hooks/use-size/use-size";

import styles from "./image-display.module.css";

export default function ImageDisplay({ data, width, height }) {
    const padding = useRef(0);

    useEffect(function () {
        if (!padding.current) {
            const style = getComputedStyle(document.body);
            padding.current = parseInt(
                style.getPropertyValue("--content-spacing-medium"),
                10
            );
        }
    }, []);

    const { maxWidth, maxHeight, aspectRatio } = useSize({ width, height });
    const customStyles = {
        maxWidth: `${maxWidth}px`,
        maxHeight: `${maxHeight}px`,
        aspectRatio,
    };

    if (maxWidth === 0 || maxHeight === 0) {
        return null;
    }

    return (
        <div className={styles["image-display"]} style={customStyles}>
            <div className={styles["image-container"]}>
                <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    height={maxHeight - padding.current * 4}
                    width={maxWidth - padding.current * 4}
                />
            </div>
        </div>
    );
}

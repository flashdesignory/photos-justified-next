import Image from "next/image";

export default function ImageDisplay({ data }) {
    return (
        <div className="image-container">
            <Image
                src={data.image.src}
                alt={data.image.alt}
                width={data.image.width}
                height={data.image.height}
            />
        </div>
    );
}

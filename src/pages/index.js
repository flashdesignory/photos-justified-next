import Head from "next/head";

import styles from "../styles/Home.module.css";
import data from "public/data/surf.json";
import ImageDisplay from "../components/image/image-display"

export default function Home() {
    return (
        <>
          <Head>
                <title>Photos Justified!</title>
                <meta name="description" content="A justified layout for photos with Next.js." key="description" />
                <meta http-equiv="Permissions-Policy" content="interest-cohort=()" />
            </Head>
            <main className={styles.main}>
                {data.items.map((item) => <ImageDisplay key={item.id} data={item} />)}
            </main>
        </>
    );
}

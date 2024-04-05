import Head from "next/head";

import data from "public/data/surf.json";
import Page from "@/partials/page/page"

import ImageDisplay from "../components/image/image-display"

export default function Home() {
    return (
        <>
          <Head>
                <title>Photos Justified!</title>
                <meta name="description" content="A justified layout for photos with Next.js." key="description" />
                <meta httpEquiv="Permissions-Policy" content="interest-cohort=()" />
            </Head>
            <Page id="index">
              {data.items.map((item) => <ImageDisplay key={item.id} data={item} />)}
            </Page>
        </>
    );
}

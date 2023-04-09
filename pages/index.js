import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Sidebar } from "../componet/sidebar";
import { Layout } from "../componet/Layout";
import { Content } from "../componet/content";
import { getDataFromAPI } from "../lib/data";
import { MobileNav } from "../componet/MobileNav";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stream</title>
        <meta name="description" content="Groove assesment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Layout
          sidebar={<Sidebar />}
          content={<Content data={data} />}
          mobileNav={<MobileNav />}
        />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getDataFromAPI();
  return {
    props: {
      data,
    },
  };
}

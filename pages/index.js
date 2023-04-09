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

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}

export async function getStaticProps() {
  const data = await getDataFromAPI();
  return {
    props: {
      data,
    },
  };
}

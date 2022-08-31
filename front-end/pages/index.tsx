import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Studio albums | Home</title>
        <meta name="keywords" content="Studio albums" />
      </Head>
      <div>
        <h2 className={styles.title}>Taylor Swift studio albums</h2>
        <p className={styles.text}>♪ long story short, i survived ♪</p>
        <Link href="/albums">
          <a className="btn">See All Albums</a>
        </Link>

        <style jsx>
          {`
            .btn {
              display: block;
              width: 150px;
              padding: 8px 0;
              margin: 20px auto;
              background: #ff5733;
              border-radius: 4px;
              color: black;
              text-align: center;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Home;

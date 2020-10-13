import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sam Poder's Profile Picture</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src='/api/current/' className={styles.avatar} />
        <h1 className={styles.title + ' header-title-name'}>
          Sam Poder
        </h1>
        <div className={styles.grid}>
          <a
            href={"https://hackclub.slack.com/team/" }
            className={styles.card + ' post'}
          >
            <h3>Get a random image &rarr;</h3>
            <p>I don't know why you would want it, but you can have it.</p>
          </a>
          <a
            href={"https://scrapbook.hackclub.com/"}
            className={styles.card + ' post'}
          >
            <h3>Change my avatar &rarr;</h3>
            <p>Changes on the Hack Club Slack. Have fun with it!</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        Meet a random Hack Clubber, built by @sampoder!
      </footer>
    </div>
  );
}
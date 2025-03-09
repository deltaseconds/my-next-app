'use client';

import Link from 'next/link';
import styles from '../../styles/about.module.css';

export default function About() {
    return (
      <div className={styles.container}>
        <h1>Welcome to the abouts and wits.</h1>
        <div className={styles.content}>
          <img src="https://avatars.githubusercontent.com/u/60275031?v=4" href="https://github.com/deltaseconds" className={styles.image} alt="Profile" />
          <p>
            This is the about page of this front end. Here you can find information about our mission, values, something something more bullshit whatever the <span className={styles.fword}>fuck</span>
          </p>
        </div>
        <br />
        <p className={styles.redirector}>
          <Link href="/account/register">
            Go see the register form
          </Link>
        </p>
      </div>
    );
}

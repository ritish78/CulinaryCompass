import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>
        Welcome to Culinary Compass.
      </p>
      <p>
        Join our community: <Link href="/community">Join</Link>
      </p>
      <p>
        Visit the meals page: <Link href="/meals">Meals</Link>
      </p>
    </main>
  );
}

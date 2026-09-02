
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <main className={styles.home}>
            <div className={styles.hero}>
                <div>
                    <span className={styles.tag}>Hot & Fresh</span>

                    <h1>
                        Welcome to
                        <br />
                        <strong>PizzaCut</strong>
                    </h1>

                    <p>
                        A small React project
                    </p>

                    <Link className={styles.cta} to="/pizza">
                        See The Menu
                    </Link>
                </div>

                <div className={styles.icon}>🍕</div>
            </div>
        </main>
    );
}

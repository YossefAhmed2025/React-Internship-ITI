
import styles from "./About.module.css";

export default function About() {
    return (
        <main className={styles.about}>
            <div className={styles["about-card"]}>
                <div className={styles["about-icon"]}>🐾</div>

                <h1>About Pet House</h1>

                <p>
                    Pet House is a simple React application
                    created to practice the basics of React.
                </p>

                <div className={styles.features}>
                    <div>React</div>
                    <div>useState</div>
                    <div>useEffect</div>
                    <div>Routing</div>
                </div>
            </div>
        </main>
    );
}

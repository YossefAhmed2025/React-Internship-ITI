
import styles from "./NotFound.module.css";

export default function NotFound() {
    return (
        <main className={styles["not-found"]}>
            <div>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, this page doesn't exist.</p>
            </div>
        </main>
    );
}


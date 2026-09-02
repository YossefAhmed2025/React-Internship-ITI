
import { Link, Outlet } from "react-router-dom";
import styles from "./Pets.module.css";

export default function Pets() {
    return (
        <main className={styles.pets}>
            <h1>Our Pets 🐾</h1>
            <p>Choose your favorite pet</p>

            <div className={styles["pets-container"]}>
                <div className={styles["pet-card"]}>
                    <div>🐶</div>
                    <h2>Dogs</h2>
                    <p>Friendly and loyal</p>
                </div>

                <div className={styles["pet-card"]}>
                    <div>🐱</div>
                    <h2>Cats</h2>
                    <p>Calm and lovely</p>
                </div>
            </div>

            <Link className={styles["details-btn"]} to="details">
                View Details
            </Link>

            <Outlet />
        </main>
    );
}


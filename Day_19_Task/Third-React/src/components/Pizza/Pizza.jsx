
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Pizza.module.css";

const API_URL = "https://dummyjson.com/recipes/search?q=pizza&limit=12";

export default function Pizza() {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function getPizzas() {
            try {
                setLoading(true);
                setError("");

                const { data } = await axios.get(API_URL, {
                    signal: controller.signal
                });

                setPizzas(data.recipes);
            } catch (err) {
                if (!axios.isCancel(err)) {
                    setError("Something went wrong while loading the menu.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        getPizzas();

        return () => controller.abort();
    }, []);

    if (loading) {
        return <p className={styles.message}>Loading...</p>;
    }

    if (error) {
        return <p className={`${styles.message} ${styles.error}`}>{error}</p>;
    }

    return (
        <main className={styles.pizza}>
            <div className={styles.menu}>
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className={styles.item}>
                        <img src={pizza.image} alt={pizza.name} />
                        <h2>{pizza.name}</h2>
                    </div>
                ))}
            </div>
        </main>
    );
}

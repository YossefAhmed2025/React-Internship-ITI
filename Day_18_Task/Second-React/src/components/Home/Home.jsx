
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Every render");
    });

    useEffect(() => {
        console.log("Component mounted");

        return () => {
            console.log("Component unmounted");
        };
    }, []);

    useEffect(() => {
        console.log("Count changed");
    }, [count]);

    return (
        <main className={styles.home}>
            <div className={styles.hero}>
                <div>
                    <span>Welcome to Pet House</span>

                    <h1>
                        Take Care Of Your
                        <br />
                        <strong>Lovely Pets</strong>
                    </h1>

                    <p>
                        A simple React project to practice
                        useState, useEffect and routing.
                    </p>

                    <div className={styles.counter}>
                        <button onClick={() => setCount(count - 1)}>
                            −
                        </button>

                        <span>{count}</span>

                        <button onClick={() => setCount(count + 1)}>
                            +
                        </button>
                    </div>
                </div>

                <div className={styles["pet-icon"]}>
                    🐶
                </div>
            </div>
        </main>
    );
}


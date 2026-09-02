
import { Link, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <h2> Pet House</h2>

                <div className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/pets">Pets</Link>
                    <Link to="/pets/details">Details</Link>
                </div>
            </nav>

            <Outlet />
        </>
    );
}


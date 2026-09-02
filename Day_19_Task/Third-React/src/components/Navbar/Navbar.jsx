
import { NavLink, Outlet } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav className={styles.navbar}>
                <h2 className={styles.brand}>PizzaCut</h2>

                <div className={styles.links}>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/pizza"
                        className={({ isActive }) =>
                            isActive ? styles.active : undefined
                        }
                    >
                        Pizza
                    </NavLink>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

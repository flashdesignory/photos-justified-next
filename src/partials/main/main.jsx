import styles from "../../styles/main.module.css";

export default function Main({ children }) {
    return (
        <main className={styles.main} id="content">
            {children}
        </main>
    );
}

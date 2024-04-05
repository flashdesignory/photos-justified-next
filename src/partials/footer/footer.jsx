import styles from "../../styles/footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            © {new Date().getFullYear()}
        </div>
    );
}

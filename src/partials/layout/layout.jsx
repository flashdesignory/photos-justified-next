import Main from "@/partials/main/main";
import Header from "@/partials/header/header";

import styles from "../../styles/layout.module.css";

export default function Layout({ id, children }) {
    console.log("id", id);
    return (
        <div className={styles.layout}>
            <Header />
            <Main>{children}</Main>
        </div>
    );
}

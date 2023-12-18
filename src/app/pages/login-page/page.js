import LoginForm from "../../components/login-form";
import styles from "./page.module.css";


const LoginPage = () => {


    return (
        <div className={styles.loginPage}>
            <section className={styles.containerParent}>
                <img
                    className={styles.containerIcon}
                    alt=""
                    src="/container12@2x.png"
                />
                <LoginForm />
            </section>
        </div>
    );
};

export default LoginPage;

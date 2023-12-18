import RegistrationSection from "../../components/registration-section";
import styles from "./page.module.css";

const SignInAuthor = () => {
    return (
        <div className={styles.signInAuthor}>
            <RegistrationSection
                userRole="Автор"
                roleText="Рекламодавець"
                registrationType="Я вже зареєстрований як Автор"
            />
        </div>
    );
};

export default SignInAuthor;

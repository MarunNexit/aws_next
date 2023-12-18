import RegistrationSection from "../../components/registration-section";
import styles from "./page.module.css";

const SignInAdvertiser = () => {



    return (
        <div className={styles.signInAdvertiser}>
            <RegistrationSection
                userRole="Рекламодавець"
                roleText="Автор"
                registrationType="Я вже зареєстрований як Рекламодавець"
            />
        </div>
    );
};

export default SignInAdvertiser;

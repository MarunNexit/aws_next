import FormContainer5 from "../../../components/form-container5";
import styles from "./page.module.css";
import PublishHouseContainer from "@/app/components/publish-house-container";
import Header from "@/app/components/header";

const SendAuthor = () => {
    return (
        <div className={styles.sendauthor}>
            <Header value={"author"} />
            <div className={styles.sendauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.frameGroup}>
                <div className={styles.wrapper1}>
                    <b className={styles.b4}>Подати рукопис</b>
                </div>
                <FormContainer5 />
            </div>
        </div>
    );
};

export default SendAuthor;

import FormContainer4 from "../../../components/form-container4";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const EditingManuscriptManager = () => {
    return (
        <div className={styles.newpageForManuscriptmanager}>
            <Header value={"manager"} />
            <div className={styles.newpageForManuscriptmanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
                <b className={styles.b4}>Рукопис</b>
                <div className={styles.destinationWrapper}>
                    <FormContainer4 />
                </div>
            </div>
        </div>
    );
};

export default EditingManuscriptManager;

"use client"
import EditPageContainer from "../../../components/edit-page-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const EditingEditor = () => {
    return (
        <div className={styles.editingeditor}>
            <Header value={"editor"} />
            <div className={styles.editingeditorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.frameGroup}>
                <div className={styles.parent}>
                    <b className={styles.b4}>Редагування рукопису</b>
                    <b className={styles.b5}>Причина редагування</b>
                    <div className={styles.output}>
                        <div className={styles.div}>Виберіть причину</div>
                    </div>
                    <b className={styles.b5}>Додатковий матеріал</b>
                    <div className={styles.output}>
                        <div className={styles.div}>Виберіть причину</div>
                    </div>
                </div>
                <EditPageContainer />
            </div>
        </div>
    );
};

export default EditingEditor;

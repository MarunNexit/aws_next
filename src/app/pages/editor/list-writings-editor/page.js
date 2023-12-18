import PublishHouseContainer from "../../../components/publish-house-container";
import FormContainer3 from "../../../components/form-container3";
import EditedEarlierContainer from "../../../components/edited-earlier-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const ListWritingsEditor = () => {
    return (
        <div className={styles.listwritingseditor}>
            <Header value={"editor"} />
            <div className={styles.listwritingseditorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.frameParent}>
                <div className={styles.wrapper}>
                    <b className={styles.b}>Список рукописів</b>
                </div>
                <FormContainer3 />
                <EditedEarlierContainer />
            </div>
        </div>
    );
};

export default ListWritingsEditor;

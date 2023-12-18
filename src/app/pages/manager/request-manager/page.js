import AdRequestContainer from "../../../components/ad-request-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const RequestManager = () => {
    return (
        <div className={styles.requestmanager}>
            <Header value={"manager"} />

            <div className={styles.requestmanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <AdRequestContainer
                advertisingButtonText="Запит на рекламу"
                advertisingDataRequestNum="Запит №2"
                adRequirementsFileButtonT="Ви можете завантажити файл запиту на рекламу"
            />
        </div>
    );
};

export default RequestManager;

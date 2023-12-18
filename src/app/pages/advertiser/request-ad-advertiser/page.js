import AdRequestContainer from "../../../components/ad-request-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const RequestAdAdvertiser = () => {
    return (
        <div className={styles.requestadadvertiser}>
            <Header value={"advertiser"} />

            <div className={styles.requestadadvertiserInner}>
                <div className={styles.frameChild} />
            </div>
            <AdRequestContainer
                advertisingButtonText="Забронювати рекламу"
                advertisingDataRequestNum="Дані щодо рекламного простору"
                adRequirementsFileButtonT="Ви можете завантажити файл рекламних вимог"
            />
        </div>
    );
};

export default RequestAdAdvertiser;

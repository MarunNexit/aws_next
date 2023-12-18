import MaterialFormContainer from "../../../components/material-form-container";
import Container1 from "../../../components/container1";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const WareHouseManager = () => {
    return (
        <div className={styles.warehousemanager}>
            <Header value={"manager"} />

            <div className={styles.warehousemanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
                <b className={styles.b4}>Склад</b>
                <div className={styles.frameWrapper}>
                    <MaterialFormContainer />
                </div>
                <div className={styles.frameWrapper}>
                    <Container1 />
                </div>
            </div>
        </div>
    );
};

export default WareHouseManager;

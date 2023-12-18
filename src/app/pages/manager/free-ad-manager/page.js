import AdvertiseBookingContainer from "../../../components/advertise-booking-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const FreeAdManager = () => {
    return (
        <div className={styles.freeadmanager}>
            <Header value={"manager"} />

            <div className={styles.freeadmanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <AdvertiseBookingContainer
                adBookingButtonText="Рекламні простори"
                bookingButtonText="Позначити зайнятим"
                actionButtonText="Позначити зайнятим"
            />
        </div>
    );
};

export default FreeAdManager;

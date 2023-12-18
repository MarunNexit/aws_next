import AdvertiseBookingContainer from "../../../components/advertise-booking-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const BuyAdAdvertiser = () => {
    return (
        <div className={styles.buyadadvertiser}>
            <Header value={"advertiser"} />

            <div className={styles.buyadadvertiserInner}>
                <div className={styles.frameChild} />
            </div>
            <AdvertiseBookingContainer
                adBookingButtonText="Забронювати рекламу"
                bookingButtonText="Забронювати"
                actionButtonText="Забронювати"
            />
        </div>
    );
};

export default BuyAdAdvertiser;

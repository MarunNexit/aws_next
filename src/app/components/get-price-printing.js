import styles from "./get-price-printing.module.css";

const GetPricePrinting = () => {
    return (
        <div className={styles.frameContainer}>
            <div className={styles.container}>
                <b className={styles.b5}>Причина редагування</b>
                <div className={styles.input}>
                    <div className={styles.textField}>
                        <div className={styles.div2}>Виберіть причину</div>
                    </div>
                </div>
                <b className={styles.b5}>Додатковий матеріал</b>
                <div className={styles.input}>
                    <div className={styles.textField}>
                        <div className={styles.div2}>Додатковий матеріал</div>
                    </div>
                </div>
                <div className={styles.frameDiv}>
                    <b className={styles.b7}>Вартість:</b>
                    <div className={styles.input2}>
                        <div className={styles.textField}>
                            <div className={styles.div2}>300</div>
                        </div>
                    </div>
                </div>
                <div className={styles.contactUsWrapper}>
                    <button className={styles.contactUs2}>
                        <b className={styles.b3}>Визначити вартість публікації</b>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetPricePrinting;

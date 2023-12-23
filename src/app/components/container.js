import styles from "./container.module.css";

const Container = () => {
  return (
    <div className={styles.frameParent}>
        <div className={styles.frameContainer}>
          <div className={styles.group}>
            <b className={styles.b3}>Причина редагування</b>
            <div className={styles.input}>
              <div className={styles.textField}>
                <div className={styles.div2}>Виберіть причину</div>
              </div>
            </div>
            <b className={styles.b3}>Додатковий матеріал</b>
            <div className={styles.input}>
              <div className={styles.textField}>
                <div className={styles.div2}>Додатковий матеріал</div>
              </div>
            </div>
            <div className={styles.contactUsWrapper}>
              <button className={styles.contactUs1}>
                <b className={styles.b2}>Відправити на редагування</b>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Container;

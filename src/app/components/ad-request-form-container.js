import styles from "./ad-request-form-container.module.css";

const AdRequestFormContainer = ({ adRequestFileText }) => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>{adRequestFileText}</b>
      </div>
      <div className={styles.add}>
        <img
          className={styles.scrollDownIcon}
          alt=""
          src="/scroll-down@2x.png"
        />
      </div>
    </div>
  );
};

export default AdRequestFormContainer;

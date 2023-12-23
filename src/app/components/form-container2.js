import styles from "./form-container2.module.css";

const FormContainer2 = ({OnUploadFieldClick}) => {

  return (
    <div className={styles.frameParent} onClick={OnUploadFieldClick}>
      <div className={styles.wrapper}>
        <b className={styles.b}>Для продовження додайте файл рукопису</b>
      </div>
      <div className={styles.addParent}>
        <div className={styles.add}>
          <img className={styles.plusIcon} alt="" src="/plus@2x.png" />
        </div>
        <div className={styles.div}>Додати</div>
      </div>
    </div>
  );
};

export default FormContainer2;

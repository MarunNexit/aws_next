import FormContainer from "./form-container";
import styles from "./form-container3.module.css";

const FormContainer3 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>Потрібно відредагувати</b>
      </div>
      <FormContainer />
      <FormContainer />
      <div className={styles.frameChild} />
      <div className={styles.frameChild} />
    </div>
  );
};

export default FormContainer3;

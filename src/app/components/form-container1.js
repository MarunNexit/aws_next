import styles from "./form-container1.module.css";

const FormContainer1 = () => {
  return (
    <div className={styles.bigField}>
      <b className={styles.b}>{`Сьогодні `}</b>
      <b className={styles.b1}>ГРафік</b>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
      <div className={styles.div}>$300</div>
    </div>
  );
};

export default FormContainer1;

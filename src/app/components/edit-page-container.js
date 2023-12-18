import AdRequestFormContainer from "./ad-request-form-container";
import FormContainer2 from "./form-container2";
import styles from "./edit-page-container.module.css";

const EditPageContainer = () => {
  return (
    <div className={styles.destination}>
      <b className={styles.b}>Сторінка редагування рукопису</b>
      <AdRequestFormContainer adRequestFileText="Ви можете завантажити файл рукопису" />
      <b className={styles.b1}>
        <span>Тип рукопису</span>
        <span className={styles.span}> *</span>
      </b>
      <div className={styles.input}>
        <div className={styles.textField}>
          <div className={styles.inputText}>Виберіть тип рукопису</div>
        </div>
      </div>
      <b className={styles.b1}>
        <span>{`Назва `}</span>
        <span className={styles.span}>*</span>
      </b>
      <div className={styles.input}>
        <div className={styles.textField}>
          <div className={styles.inputText}>Заява з коментарем</div>
        </div>
      </div>
      <b className={styles.b1}>
        <span>{`Опис `}</span>
        <span className={styles.span}>*</span>
      </b>
      <div className={styles.input2}>
        <div className={styles.textField2}>
          <div className={styles.div1}>Введіть свій запит...</div>
        </div>
      </div>
      <FormContainer2 />
      <button className={styles.contactUs}>
        <b className={styles.b4}>Відправити на редагування</b>
      </button>
    </div>
  );
};

export default EditPageContainer;

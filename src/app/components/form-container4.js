import AdRequestFormContainer from "./ad-request-form-container";
import FormContainer2 from "./form-container2";
import styles from "./form-container4.module.css";

const FormContainer4 = () => {
  return (
    <div className={styles.destination}>
      <b className={styles.b}>Дані щодо рукопису:</b>
      <b className={styles.email}>
        <span>Автор</span>
        <span className={styles.span}> (email)*</span>
      </b>
      <div className={styles.input}>
        <div className={styles.textField}>
          <div className={styles.div}>Виберіть тип рукопису</div>
        </div>
      </div>
      <b className={styles.email}>
        <span>{`Тип рукопису `}</span>
        <span className={styles.span}>*</span>
      </b>
      <div className={styles.input}>
        <div className={styles.textField}>
          <div className={styles.div}>Заява з коментарем</div>
        </div>
      </div>
      <b className={styles.email}>
        <span>{`Заголовок `}</span>
        <span className={styles.span}>*</span>
      </b>
      <div className={styles.input2}>
        <div className={styles.textField}>
          <div className={styles.div2}>Компанія</div>
        </div>
      </div>
      <b className={styles.email}>
        <span>{`Опис `}</span>
        <span className={styles.span}>*</span>
      </b>
      <div className={styles.input3}>
        <div className={styles.textField3}>
          <div className={styles.div3}>
            КомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпаніяКомпанія
          </div>
        </div>
      </div>
      <b className={styles.email}>Кількість сторінок</b>
      <div className={styles.input2}>
        <div className={styles.textField}>
          <div className={styles.div2}>Видання №1</div>
        </div>
      </div>
      <b className={styles.email}>Формат сторінок</b>
      <div className={styles.input2}>
        <div className={styles.textField}>
          <div className={styles.div2}>А4</div>
        </div>
      </div>
      <AdRequestFormContainer adRequestFileText="Ви можете завантажити файл запиту на рекламу" />
      <FormContainer2 />
      <button className={styles.contactUs}>
        <b className={styles.b6}>Оновити рукопис</b>
      </button>
    </div>
  );
};

export default FormContainer4;

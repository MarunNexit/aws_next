import styles from "./edited-previously-submissions-con.module.css";

const EditedPreviouslySubmissionsCon = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <b className={styles.b}>Подані рукописи</b>
        <b className={styles.b1}>Статус</b>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.group}>
          <div className={styles.div}>
            Наша сучасна типографія обладнана найновішим обладнанням для друку
            книг та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
            обладнана найновішим обладнанням для друку книг та журналів. Наша
            сучасна типографія обладнана найновішим обладнанням для друку книг
            та журналів. Друкуємо Ваші Твори. Наша сучасна типографія обладнана
            найновішим обладнанням для друку книг та журналів.
          </div>
          <div className={styles.div}>
            Наша сучасна типографія обладнана найновішим обладнанням для друку
            книг та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
            обладнана найновішим обладнанням для друку книг та журналів. Наша
            сучасна типографія обладнана найновішим обладнанням для друку книг
            та журналів. Друкуємо Ваші Твори. Наша сучасна типографія обладнана
            найновішим обладнанням для друку книг та журналів.
          </div>
        </div>
      </div>
      <div className={styles.contactUsWrapper}>
        <button className={styles.contactUs}>
          <b className={styles.b2}>Детальніше</b>
        </button>
      </div>
    </div>
  );
};

export default EditedPreviouslySubmissionsCon;

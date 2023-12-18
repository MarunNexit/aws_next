import styles from "./container-form2.module.css";

const ContainerForm2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>Опубліковані рукописи</b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <b className={styles.b}>Подані рукописи</b>
          <b className={styles.b2}>Статус</b>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.group}>
            <div className={styles.div}>
              Наша сучасна типографія обладнана найновішим обладнанням для друку
              книг та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів. Наша
              сучасна типографія обладнана найновішим обладнанням для друку книг
              та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів.
            </div>
            <div className={styles.div}>
              Наша сучасна типографія обладнана найновішим обладнанням для друку
              книг та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів. Наша
              сучасна типографія обладнана найновішим обладнанням для друку книг
              та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів.
            </div>
          </div>
        </div>
        <button className={styles.contactUs}>
          <b className={styles.b3}>Редагування інформації</b>
        </button>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.parent}>
            <b className={styles.b}>Подані рукописи</b>
            <b className={styles.b2}>Статус</b>
          </div>
          <div className={styles.parent1}>
            <div className={styles.div}>
              Наша сучасна типографія обладнана найновішим обладнанням для друку
              книг та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів. Наша
              сучасна типографія обладнана найновішим обладнанням для друку книг
              та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів.
            </div>
            <div className={styles.div}>
              Наша сучасна типографія обладнана найновішим обладнанням для друку
              книг та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів. Наша
              сучасна типографія обладнана найновішим обладнанням для друку книг
              та журналів. Друкуємо Ваші Твори. Наша сучасна типографія
              обладнана найновішим обладнанням для друку книг та журналів.
            </div>
          </div>
        </div>
        <button className={styles.contactUs}>
          <b className={styles.b3}>Редагування інформації</b>
        </button>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default ContainerForm2;

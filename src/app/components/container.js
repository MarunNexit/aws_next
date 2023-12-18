import styles from "./container.module.css";

const Container = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>Нові рукописи від авторів</b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.container}>
          <b className={styles.b}>Подані рукописи</b>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.parent}>
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
          <b className={styles.b2}>Відправити на редагування</b>
        </button>
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
      <div className={styles.frameChild} />
      <div className={styles.frameDiv}>
        <div className={styles.frameParent1}>
          <div className={styles.container}>
            <b className={styles.b}>Подані рукописи</b>
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
          <b className={styles.b2}>Відправити на редагування</b>
        </button>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default Container;

import styles from "./edited-manuscripts-container.module.css";

const EditedManuscriptsContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>Відредаговані рукописи</b>
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
        <div className={styles.contactUsParent}>
          <button className={styles.contactUs}>
            <b className={styles.b3}>Визначити вартість публікації</b>
          </button>
          <button className={styles.contactUs}>
            <b className={styles.b3}>Відправити на редагування</b>
          </button>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.container}>
            <b className={styles.b5}>Причина редагування</b>
            <div className={styles.input}>
              <div className={styles.textField}>
                <div className={styles.div2}>Виберіть причину</div>
              </div>
            </div>
            <b className={styles.b5}>Додатковий матеріал</b>
            <div className={styles.input}>
              <div className={styles.textField}>
                <div className={styles.div2}>Додатковий матеріал</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <b className={styles.b7}>Вартість:</b>
              <div className={styles.input2}>
                <div className={styles.textField}>
                  <div className={styles.div2}>300</div>
                </div>
              </div>
            </div>
            <div className={styles.contactUsWrapper}>
              <button className={styles.contactUs2}>
                <b className={styles.b3}>Визначити вартість публікації</b>
              </button>
            </div>
          </div>
        </div>
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
        <div className={styles.contactUsGroup}>
          <button className={styles.contactUs}>
            <b className={styles.b3}>Визначити вартість публікації</b>
          </button>
          <button className={styles.contactUs}>
            <b className={styles.b3}>Відправити на редагування</b>
          </button>
        </div>
      </div>
      <div className={styles.frameChild} />
    </div>
  );
};

export default EditedManuscriptsContainer;

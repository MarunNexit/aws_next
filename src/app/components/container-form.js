import { useMemo } from "react";
import styles from "./container-form.module.css";

const ContainerForm = ({ propAlignSelf }) => {
  const b4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.parent}>
          <b className={styles.b} style={b4Style}>
            Подані рукописи
          </b>
          <b className={styles.b1}>Статус</b>
        </div>
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
      <button className={styles.contactUs}>
        <b className={styles.b2}>Детальніше</b>
      </button>
    </div>
  );
};

export default ContainerForm;

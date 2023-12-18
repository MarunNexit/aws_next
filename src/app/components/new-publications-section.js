import styles from "./new-publications-section.module.css";

const NewPublicationsSection = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.parent}>
        <b className={styles.b}>Нові Видання</b>
        <div className={styles.div}>
          Не пропустіть наші найсвіжіші видання, які виходять на світ щотижня.
          Вони чекають саме на вас – тих, хто готовий зануритися у безмежний
          океан слова та відчути його пульсуючий ритм. Поглибіться в наш
          літературний світ, де кожен твір – це новий світ, який ви можете
          відкрити для себе.
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.containerParent}>
          <img
            className={styles.containerIcon}
            alt=""
            src="/container8@2x.png"
          />
          <b className={styles.like}>“Like”</b>
        </div>
        <div className={styles.containerParent}>
          <img
            className={styles.containerIcon1}
            alt=""
            src="/container9@2x.png"
          />
          <b className={styles.b1}>“Українська вишиванка”</b>
        </div>
        <div className={styles.containerParent}>
          <img
            className={styles.containerIcon1}
            alt=""
            src="/container10@2x.png"
          />
          <b className={styles.b1}>“Український Соціум”</b>
        </div>
      </div>
    </section>
  );
};

export default NewPublicationsSection;

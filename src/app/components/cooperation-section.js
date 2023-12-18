import styles from "./cooperation-section.module.css";

const CooperationSection = () => {
  return (
    <section className={styles.zarrinLandingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <h1 className={styles.h1}>Співпраця з Рекламодавцями</h1>
          <div className={styles.div}>
            Ми вам пропонуємо унікальні та ефективні рекламні рішення, які
            дозволять вашому бізнесу виділитися у наших виданнях та привертати
            увагу вашої цільової аудиторії. З нами ви отримаєте не просто
            простір для реклами, але і стратегічно розроблені кампанії,
            спрямовані на досягнення ваших бізнес-цілей.
          </div>
          <button className={styles.contactUs}>
            <b className={styles.b}>Замовити рекламу</b>
          </button>
        </div>
        <div className={styles.containerWrapper}>
          <img
            className={styles.containerIcon}
            alt=""
            src="/container7@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;

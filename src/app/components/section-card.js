import styles from "./section-card.module.css";

const SectionCard = () => {
  return (
    <section className={styles.parent}>
      <h1 className={styles.h1}>Наші Можливості</h1>
      <div className={styles.frameParent}>
        <div className={styles.group}>
          <h1 className={styles.h11}>Публікації Авторів</h1>
          <div className={styles.div}>
            <p
              className={styles.p}
            >{`Подавайте свої рукописи і отримуйте можливість бути опублікованими в наших виданнях. `}</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>
              Ми віримо в розвиток та підтримку творчих ідей, і ваш талант може
              стати частиною нашої літературної спільноти
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <h1 className={styles.h11}>Реклама у Виданнях</h1>
          <div className={styles.div}>
            <p
              className={styles.p}
            >{`Виберіть наше видання для розміщення вашої реклами. Ми пропонуємо ефективний та цільовий доступ до аудиторії, яка цінує якісний контент. `}</p>
            <p className={styles.p}>&nbsp;</p>
            <p className={styles.p}>
              Бронюйте простір у наших виданнях, і ваше повідомлення буде
              представлене перед нашим широким читацьким загалом.
            </p>
          </div>
        </div>
        <div className={styles.group}>
          <h1 className={styles.h13}>Співпраця</h1>
          <div className={styles.div}>
            Нехай ваші ідеї розцвітають разом з нами. Почніть співпрацювати як
            автор чи рекламодавець, і ми допоможемо вам досягти ваших цілей.
            Наша команда готова надати підтримку та поради для успішної
            співпраці.
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;

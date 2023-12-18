import styles from "./advertise-booking-container.module.css";

const AdvertiseBookingContainer = ({
  adBookingButtonText,
  bookingButtonText,
  actionButtonText,
}) => {
  return (
    <div className={styles.parent}>
      <b className={styles.b}>{adBookingButtonText}</b>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.group}>
            <b className={styles.b1}>ПООООШУК ЗРОБИ ТУТ</b>
            <div className={styles.frameChild} />
            <b className={styles.b1}>Тут вибір жанру</b>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>Подані рукописи</b>
                </div>
                <div className={styles.container}>
                  <div className={styles.div}>
                    Наша сучасна типографія обладнана найновішим обладнанням для
                    друку книг та журналів. Друкуємо Ваші Твори. Наша сучасна
                    типографія обладнана найновішим обладнанням для друку книг
                    та журналів. Наша сучасна типографія обладнана найновішим
                    обладнанням для друку книг та журналів. Друкуємо Ваші Твори.
                    Наша сучасна типографія обладнана найновішим обладнанням для
                    друку книг та журналів.
                  </div>
                </div>
                <button className={styles.contactUs}>
                  <b className={styles.b4}>{bookingButtonText}</b>
                </button>
              </div>
            </div>
            <div className={styles.frameItem} />
            <div className={styles.frameWrapper1}>
              <div className={styles.frameDiv}>
                <div className={styles.wrapper}>
                  <b className={styles.b3}>Подані рукописи</b>
                </div>
                <div className={styles.container}>
                  <div className={styles.div}>
                    Наша сучасна типографія обладнана найновішим обладнанням для
                    друку книг та журналів. Друкуємо Ваші Твори. Наша сучасна
                    типографія обладнана найновішим обладнанням для друку книг
                    та журналів. Наша сучасна типографія обладнана найновішим
                    обладнанням для друку книг та журналів. Друкуємо Ваші Твори.
                    Наша сучасна типографія обладнана найновішим обладнанням для
                    друку книг та журналів.
                  </div>
                </div>
                <button className={styles.contactUs}>
                  <b className={styles.b4}>{actionButtonText}</b>
                </button>
              </div>
            </div>
            <div className={styles.frameInner} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiseBookingContainer;

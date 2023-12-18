import styles from "./ad-request-container.module.css";

const AdRequestContainer = ({
  advertisingButtonText,
  advertisingDataRequestNum,
  adRequirementsFileButtonT,
}) => {
  return (
    <div className={styles.parent}>
      <b className={styles.b}>{advertisingButtonText}</b>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.wrapper}>
            <b className={styles.b1}>{advertisingDataRequestNum}</b>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.group}>
              <b className={styles.b2}>Дані запиту на рекламу:</b>
              <div className={styles.frameContainer}>
                <div className={styles.idParent}>
                  <b className={styles.id}>Користувач ID:</b>
                  <div className={styles.div}>1</div>
                </div>
                <div className={styles.idParent}>
                  <div className={styles.id}>
                    <b>Рекламодавець Email:</b>
                    <span>{` `}</span>
                  </div>
                  <div className={styles.div}>Рекламодавець@</div>
                </div>
                <div className={styles.idParent}>
                  <div className={styles.id}>
                    <b>Компанія:</b>
                    <span>{` `}</span>
                  </div>
                  <div className={styles.div}>Компанія</div>
                </div>
                <div className={styles.idParent}>
                  <div className={styles.id}>
                    <b>Видання ID:</b>
                    <span>{` `}</span>
                  </div>
                  <div className={styles.div}>12</div>
                </div>
                <div className={styles.idParent}>
                  <div className={styles.id}>
                    <b>Видання Назва:</b>
                    <span>{` `}</span>
                  </div>
                  <div className={styles.div}>Видання №1</div>
                </div>
                <div className={styles.idParent}>
                  <div className={styles.id}>
                    <b>Ціна</b>
                    <span>:</span>
                  </div>
                  <div className={styles.div}>100</div>
                </div>
                <div className={styles.idParent}>
                  <b className={styles.id}>Дата початку:</b>
                  <div className={styles.div}>12.11.2011</div>
                </div>
                <div className={styles.idParent}>
                  <b className={styles.id}>Дата закінчення:</b>
                  <div className={styles.div}>13.11.2011</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.frame}>
                <b className={styles.b1}>{adRequirementsFileButtonT}</b>
              </div>
              <div className={styles.add}>
                <img
                  className={styles.scrollDownIcon}
                  alt=""
                  src="/scroll-down@2x.png"
                />
              </div>
            </div>
            <div className={styles.acceptParent}>
              <button className={styles.accept}>
                <b className={styles.b6}>Прийняти запит</b>
              </button>
              <button className={styles.accept}>
                <b className={styles.b6}>Відхилити запит</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdRequestContainer;

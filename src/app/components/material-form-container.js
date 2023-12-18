import styles from "./material-form-container.module.css";

const MaterialFormContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <b className={styles.b}>Матеріали</b>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <button className={styles.largenormaljustifyactive}>
              <div className={styles.image7Parent}>
                <img
                  className={styles.image7Icon}
                  alt=""
                  src="/image-7@2x.png"
                />
                <b className={styles.b1}>Пошук матеріалів</b>
              </div>
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.group}>
        <b className={styles.div}>Назва матеріалу</b>
        <b className={styles.div}>Тип</b>
        <b className={styles.div}>Виробник</b>
        <b className={styles.div}>Кількість</b>
        <b className={styles.div}>Дата оновлення</b>
        <b className={styles.div}>Редагувати</b>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.group}>
        <div className={styles.div}>Папір</div>
        <div className={styles.div}>Друкарський папір</div>
        <div className={styles.div}>Valve</div>
        <div className={styles.div}>1000</div>
        <div className={styles.div}>2023-12-10 15:30:00</div>
        <b className={styles.div}>Редагувати</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.div}>Чорнило</div>
        <div className={styles.div}>Друкарське чорнило</div>
        <div className={styles.div}>Ink Corporation</div>
        <div className={styles.div}>200</div>
        <div className={styles.div}>2023-12-10 15:30:00</div>
        <b className={styles.div}>Редагувати</b>
      </div>
      <div className={styles.group}>
        <div className={styles.div}>Клей для переплету</div>
        <div className={styles.div}>Книжковий клей</div>
        <div className={styles.div}>КнигоКлейСервіс</div>
        <div className={styles.div}>80</div>
        <div className={styles.div}>2023-12-10 15:30:00</div>
        <b className={styles.div}>Редагувати</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.div}>Картон</div>
        <div className={styles.div}>Картонний лист</div>
        <div className={styles.div}>УкрКартонПром</div>
        <div className={styles.div}>300</div>
        <div className={styles.div}>2023-12-10 15:30:00</div>
        <b className={styles.div}>Редагувати</b>
      </div>
      <div className={styles.group}>
        <div className={styles.div}>Плівка для ламінування</div>
        <div className={styles.div}>Плівка для ламінування</div>
        <div className={styles.div}>УкрПостачальник</div>
        <div className={styles.div}>100</div>
        <div className={styles.div}>2023-12-10 15:30:00</div>
        <b className={styles.div}>Редагувати</b>
      </div>
    </div>
  );
};

export default MaterialFormContainer;

import styles from "./advert-list-container.module.css";

const AdvertListContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <b className={styles.b}>Список рекламодавців</b>
        <div className={styles.largenormaljustifyactiveWrapper}>
          <button className={styles.largenormaljustifyactive}>
            <div className={styles.image7Parent}>
              <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
              <b className={styles.b1}>Пошук рекламодавців</b>
            </div>
            <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
          </button>
        </div>
      </div>
      <div className={styles.group}>
        <b className={styles.id}>Назва компанії</b>
        <b className={styles.id}>Користувач ID</b>
        <b className={styles.id}>Користувач Email</b>
        <b className={styles.id}>Дата оновлення</b>
        <b className={styles.id}>Редагування</b>
      </div>
      <div className={styles.frameChild} />
      <div className={styles.group}>
        <div className={styles.id}>Рекламодавець</div>
        <div className={styles.id}>12</div>
        <div className={styles.id}>asdasd@asd</div>
        <div className={styles.id}>2023-12-10 15:30:00</div>
        <b className={styles.id}>Редагувати</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.id}>Рекламодавець</div>
        <div className={styles.id}>Друкарське чорнило</div>
        <div className={styles.id}>Ink Corporation</div>
        <div className={styles.id}>200</div>
        <div className={styles.id}>2023-12-10 15:30:00</div>
        <b className={styles.id}>Редагувати</b>
      </div>
      <div className={styles.group}>
        <div className={styles.id}>Рекламодавець</div>
        <div className={styles.id}>Книжковий клей</div>
        <div className={styles.id}>КнигоКлейСервіс</div>
        <div className={styles.id}>80</div>
        <div className={styles.id}>2023-12-10 15:30:00</div>
        <b className={styles.id}>Редагувати</b>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.id}>Рекламодавець</div>
        <div className={styles.id}>Картонний лист</div>
        <div className={styles.id}>УкрКартонПром</div>
        <div className={styles.id}>300</div>
        <div className={styles.id}>2023-12-10 15:30:00</div>
        <b className={styles.id}>Редагувати</b>
      </div>
      <div className={styles.group}>
        <div className={styles.id}>Рекламодавець</div>
        <div className={styles.id}>Плівка для ламінування</div>
        <div className={styles.id}>УкрПостачальник</div>
        <div className={styles.id}>100</div>
        <div className={styles.id}>2023-12-10 15:30:00</div>
        <b className={styles.id}>Редагувати</b>
      </div>
    </div>
  );
};

export default AdvertListContainer;

import styles from "./container-card.module.css";
import Link from "next/link";

const ContainerCard = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>
            Вітаємо на головній сторінці нашого видавництва!
          </h1>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>
            Ми спеціалізуємося на виданні книг, журналів та інших періодичних
            видань. З нашої типографії виходять високоякісні видання, а також ми
            надаємо можливість для розміщення реклами в наших періодичних
            виданнях.
          </div>
        </div>
        <div className={styles.largenormaljustifyactiveParent}>
          <Link className={styles.largenormaljustifyactive} href="/pages/sign-in-author" >
            <b className={styles.b}>Стати автором</b>
          </Link>
          <Link className={styles.largenormaljustifyactive} href="/pages/sign-in-advertiser" >
            <b className={styles.b}>Замовити рекламу</b>
          </Link>
        </div>
      </div>
      <img className={styles.containerIcon} alt="" src="/container3@2x.png" />
    </div>
  );
};

export default ContainerCard;

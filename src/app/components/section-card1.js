import styles from "./section-card1.module.css";
import Link from "next/link";

const SectionCard1 = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.containerParent}>
        <img className={styles.containerIcon} alt="" src="/container4@2x.png" />
        <div className={styles.containerGroup}>
          <img
            className={styles.containerIcon1}
            alt=""
            src="/container5@2x.png"
          />
          <img
            className={styles.containerIcon1}
            alt=""
            src="/container6@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.wrapper}>
          <h1 className={styles.h1}>Чому обирати нашу типографію?</h1>
        </div>
        <div className={styles.container}>
          <div className={styles.div}>
            <ul className={styles.ul}>
              <li className={styles.li}>
                Висока Якість. Ми прагнемо до найвищих стандартів якості у
                кожному друку. Наше обладнання та професійний персонал
                гарантують, що кожен екземпляр буде виглядати бездоганно та
                професійно. 
              </li>
              <li className={styles.li}>
                Сучасне Обладнання. Ми використовуємо передове обладнання, яке
                дозволяє нам забезпечити найсучасніші технічні рішення у світі
                друкарства. Це допомагає нам не тільки зберігати, але й
                перевершувати ваші очікування. 
              </li>
              <li className={styles.li}>Ефективне Виробництво.</li>
              <li>
                Наша ефективність у виробництві дозволяє вам отримати ваші твори
                вчасно, не компромітуючи якість. Ми розуміємо важливість
                терміновості, і наша команда працює для того, щоб задовольнити
                ваші потреби.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.contactUsWrapper}>
          <Link className={styles.contactUs} href={"/pages/home#publication"}>
            <b className={styles.b}>Детальніше про видання</b>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionCard1;

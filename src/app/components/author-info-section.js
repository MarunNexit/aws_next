import styles from "./author-info-section.module.css";
import Link from "next/link";

const AuthorInfoSection = () => {
  return (
    <div className={styles.zarrinLandingPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <b className={styles.b}>Інформація для Авторів</b>
          <div className={styles.div}>
            <p className={styles.p}>Контролюйте процес публікації</p>
            <p className={styles.p}>
              Реєструйтесь як автор, подавайте свої рукописи та стежте за їхнім
              редагуванням і рецензуванням.
            </p>
          </div>
          <Link className={styles.contactUs} href={"/pages/sign-in-author"}>
            <b className={styles.b1}>Стати Автором</b>
          </Link>
        </div>
        <div className={styles.containerWrapper}>
          <img
            className={styles.containerIcon}
            alt=""
            src="/container11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorInfoSection;

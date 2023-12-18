import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./header1.module.css";

const Header1 = () => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/pages/sign-in-author");
  }, [router]);

  const onText1Click = useCallback(() => {
    router.push("/pages/sign-in-advertiser");
  }, [router]);

  const onContactUsClick = useCallback(() => {
    router.push("/pages/login-page");
  }, [router]);

  return (
    <div className={styles.menu}>
      <div className={styles.logoParent}>
        <div className={styles.logo}>
          <img className={styles.logo51Icon} alt="" src="/logo5-1@2x.png" />
          <div className={styles.publishHouse}>Publish House</div>
        </div>
        <nav className={styles.iconMenu2Parent}>
          <img className={styles.iconMenu2} alt="" src="/icon-menu-2@2x.png" />
          <div className={styles.div} onClick={onTextClick}>
            Стати автором
          </div>
          <div className={styles.div1} onClick={onText1Click}>
            Стати рекламодавцем
          </div>
          <button className={styles.contactUs} onClick={onContactUsClick}>
            <div className={styles.div2}>Увійти</div>
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header1;

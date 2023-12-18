import styles from "./publish-house-section.module.css";

const PublishHouseSection = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.logoWrapper}>
        <div className={styles.logo}>
          <img className={styles.logo51Icon} alt="" src="/logo5-1@2x.png" />
          <div className={styles.publishHouse}>Publish House</div>
        </div>
      </div>
      <div className={styles.menu}>
        <div className={styles.div}>Головна</div>
        <div className={styles.div}>Увійти</div>
        <div className={styles.div}>{`Стати автором `}</div>
        <div className={styles.div}>Стати рекламодавцем</div>
      </div>
      <div className={styles.dribbbleParent}>
        <div className={styles.dribbble}>
          <div className={styles.dribbbleChild} />
          <b className={styles.fb}>FB</b>
        </div>
        <div className={styles.dribbble}>
          <div className={styles.dribbbleChild} />
          <b className={styles.ig}>IG</b>
        </div>
        <div className={styles.dribbble}>
          <div className={styles.dribbbleChild} />
          <b className={styles.fb}>LN</b>
        </div>
        <div className={styles.dribbble}>
          <div className={styles.dribbbleChild} />
          <b className={styles.yt}>YT</b>
        </div>
      </div>
      <img className={styles.dividerIcon} alt="" src="/divider@2x.png" />
      <div className={styles.publishHouseInc}>
        Publish House Inc © 2023. All Right Reserved
      </div>
    </div>
  );
};

export default PublishHouseSection;

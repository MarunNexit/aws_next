import CardContainer from "./card-container";
import styles from "./section-card2.module.css";

const SectionCard2 = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.parent}>
        <b className={styles.b}>Наші Рекламодавці</b>
        <div className={styles.div}>Партнери, які вірять у нас</div>
      </div>
      <div className={styles.frameGroup}>
        <CardContainer
          imageDimensions="/image-5@2x.png"
          organizationName={`Procter & Gamble (P&G)`}
          advertisingMessage="Співпраця з нами - це успіх вашого бізнесу."
          propWidth="129px"
          propHeight="129px"
        />
        <CardContainer
          imageDimensions="/image-6@2x.png"
          organizationName={`Ogilvy & Mather`}
          advertisingMessage="Найкращі маркетингові рішення для вас."
          propWidth="379px"
          propHeight="94px"
        />
        <CardContainer
          imageDimensions="/who-1@2x.png"
          organizationName="World Health Organization "
          advertisingMessage="Реклама, яка залишає слід у серцях."
          propWidth="156px"
          propHeight="137px"
        />
      </div>
    </div>
  );
};

export default SectionCard2;

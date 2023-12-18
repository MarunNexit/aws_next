import { useMemo } from "react";
import styles from "./publish-house-container.module.css";

const PublishHouseContainer = ({
  documentImageUrl,
  manuscriptTitle,
  submitManuscriptButtonTex,
  salesCode,
  logoWidth,
  logoAlignItems,
  frameDivAlignSelf,
  frameDivWidth,
  frameDivAlignSelf1,
  frameDivAlignSelf2,
  propAlignSelf,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: logoWidth,
      alignItems: logoAlignItems,
    };
  }, [logoWidth, logoAlignItems]);

  const bStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivAlignSelf]);

  const b1Style = useMemo(() => {
    return {
      width: frameDivWidth,
      alignSelf: frameDivAlignSelf1,
    };
  }, [frameDivWidth, frameDivAlignSelf1]);

  const b2Style = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf2,
    };
  }, [frameDivAlignSelf2]);

  const b3Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div className={styles.logoParent} style={frameDivStyle}>
      <div className={styles.logo}>
        <img className={styles.logo51Icon} alt="" src={documentImageUrl} />
        <div className={styles.publishHouse}>Publish House</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.wrapper}>
          <b className={styles.b} style={bStyle}>
            Профіль
          </b>
        </div>
        <div className={styles.container}>
          <b className={styles.b1} style={b1Style}>
            {manuscriptTitle}
          </b>
        </div>
        <div className={styles.container}>
          <b className={styles.b} style={b2Style}>
            {submitManuscriptButtonTex}
          </b>
        </div>
        <div className={styles.container}>
          <b className={styles.b} style={b3Style}>
            {salesCode}
          </b>
        </div>
      </div>
    </div>
  );
};

export default PublishHouseContainer;

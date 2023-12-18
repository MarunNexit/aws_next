import { useMemo } from "react";
import styles from "./card-container.module.css";

const CardContainer = ({
  imageDimensions,
  organizationName,
  advertisingMessage,
  propWidth,
  propHeight,
}) => {
  const image5IconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  return (
    <div className={styles.image5Parent}>
      <img
        className={styles.image5Icon}
        alt=""
        src={imageDimensions}
        style={image5IconStyle}
      />
      <b className={styles.procterGamble}>{organizationName}</b>
      <div className={styles.div}>{advertisingMessage}</div>
    </div>
  );
};

export default CardContainer;

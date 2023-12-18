import EditedPreviouslySubmissionsCon from "./edited-previously-submissions-con";
import styles from "./edited-earlier-container.module.css";

const EditedEarlierContainer = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.wrapper}>
        <b className={styles.b}>Відредаговані раніше</b>
      </div>
      <EditedPreviouslySubmissionsCon />
      <div className={styles.frameChild} />
      <EditedPreviouslySubmissionsCon />
    </div>
  );
};

export default EditedEarlierContainer;

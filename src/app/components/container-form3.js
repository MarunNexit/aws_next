import ContainerForm1 from "./container-form1";
import styles from "./container-form3.module.css";

const ContainerForm3 = (userInfo) => {
  return (
    <div className={styles.frameParent}>
      <ContainerForm1 name={userInfo.userInfo.UserName} email = {userInfo.userInfo.Email} phone = {userInfo.userInfo.Phone} department= {userInfo.userInfo.EditorDepartment} addition = {userInfo.userInfo.ContactInform} role = {"manager"}/>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.parent}>
          <b className={styles.b}>Статистика по публікаціям</b>
          <div className={styles.textFieldParent}>
            <div className={styles.textField}>
              <div className={styles.div}>
                <p className={styles.p}>{`Кількість опублікованих `}</p>
                <p className={styles.p}>книг і буклетів</p>
              </div>
              <div className={styles.div1}>30</div>
            </div>
            <div className={styles.textField}>
              <div className={styles.div2}>
                Кількість опублікованих журналів
              </div>
              <div className={styles.div1}>30</div>
            </div>
            <div className={styles.textField}>
              <div
                className={styles.div2}
              >{`Кількість ще неопублікованих видань `}</div>
              <div className={styles.div1}>300</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContainerForm3;

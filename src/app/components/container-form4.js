import ContainerForm1 from "./container-form1";
import FormContainer1 from "./form-container1";
import styles from "./container-form4.module.css";

const ContainerForm4 = (userInfo) => {

  return (
    <div className={styles.frameParent}>
      <ContainerForm1 name={userInfo.userInfo.UserName} email = {userInfo.userInfo.Email} phone = {userInfo.userInfo.Phone} department= {userInfo.userInfo.EditorDepartment} addition = {userInfo.userInfo.ContactInform} role = {"editor"}/>
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.parent}>
          <b className={styles.b}>Статистика по редагування</b>
          <div className={styles.textFieldParent}>
            <div className={styles.textField}>
              <div className={styles.div}>Кількість запитів на редагування</div>
              <div className={styles.div1}>30</div>
            </div>
            <div className={styles.textField}>
              <div className={styles.div}>
                Кількість відредагованих рукописів сьогодні
              </div>
              <div className={styles.div1}>30</div>
            </div>
            <div className={styles.textField}>
              <div className={styles.div}>
                Кількість відредагованих рукописів за місяць
              </div>
              <div className={styles.div1}>300</div>
            </div>
          </div>
          <FormContainer1 />
        </div>
      </div>
    </div>
  );
};

export default ContainerForm4;

"use client"
import styles from "./container-form1.module.css";
import {useRouter} from "next/navigation";

const ContainerForm1 = ({name, email, phone, department, addition, role, company, web}) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/pages/signout');
  };

  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <b className={styles.b}>Привіт, {name}</b>
          <div className={styles.group}>
            <b className={styles.b1}>Контактні дані:</b>
            <div className={styles.frameGroup}>
              <div className={styles.container}>
                <div className={styles.div}>
                  <b>ПІП:</b>
                  <span>{` `}</span>
                </div>
                <div className={styles.mazkevych2003gmailcom}>
                  {name}
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.div}>Email:</b>
                <div className={styles.mazkevych2003gmailcom}>
                  {email}
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.div}>Номер телефону:</b>
                <div className={styles.mazkevych2003gmailcom}>{phone}</div>
              </div>
              {role === "manager" || role === "editor"? (
                      <div className={styles.container}>
                        <b className={styles.div}>Відділення:</b>
                        <div className={styles.mazkevych2003gmailcom}>
                          {department}
                        </div>
                      </div>
                  ):(
                  <></>
              )}
              {role === "advertiser" ? (
                  <>
                    <div className={styles.container}>
                      <b className={styles.div}>Компанія:</b>
                      <div className={styles.mazkevych2003gmailcom}>
                        {company}
                      </div>
                    </div>
                    <div className={styles.container}>
                      <b className={styles.div}>Вебсайт:</b>
                      <div className={styles.mazkevych2003gmailcom}>
                        {web}
                      </div>
                    </div>
                  </>
              ):(
                  <></>
              )}

              <div className={styles.container}>
                <b className={styles.div}>Додаткова інформація:</b>
                <div className={styles.mazkevych2003gmailcom}>
                  {addition}
                </div>
              </div>
              <div className={styles.container}>
                <b className={styles.div}>Роль:</b>
                <div className={styles.mazkevych2003gmailcom}>{role}</div>
              </div>
            </div>
          </div>
          <div className={styles.acceptWrapper}>
            <button className={styles.accept}>
              <b className={styles.b6}>Оновити дані</b>
            </button>
            <button className={styles.accept} style={{marginLeft: "20px"}} onClick={() => handleRedirect()}>
              <b className={styles.b6}>Вийти з акаунту</b>
            </button>
          </div>
        </div>
        <img className={styles.containerIcon} alt="" src="/container1@2x.png" />
      </div>
    </div>
  );
};

export default ContainerForm1;

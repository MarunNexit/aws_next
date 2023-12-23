"use client"
import {useMemo, useState} from "react";
import styles from "./container-form.module.css";
import Link from "next/link";
import SendToEditing from "@/app/components/send-to-editing";
import Container from "@/app/components/container";

const ContainerForm = ({ propAlignSelf , item, paramWritings, role}) => {

  const [boolSendToEditing, setBoolSendToEditing] = useState(false);
  const [boolPrice, setBoolPrice] = useState(false);

  const b4Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const ItemSendToEditing = () => {};

  return (
    <div className={styles.frameParent}>

      <div className={styles.frameGroup}>
        <div className={styles.container}>
          <b className={styles.b}>
            {item && item.EditionTitle}
          </b>
          {item && item.Status === "Published"? (
              <b className={styles.b1}>Опублікований</b>
          ) : item && item.Status === "Editing"?(
              <b className={styles.b1}>Редагування</b>
          ) : item && item.Status === "Request"?(
              <b className={styles.b1}>Запит</b>
          ) : (<></>)
          }
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.parent}>
            <div className={styles.div}>
              {item && item.EditionDescription}
            </div>
          </div>
        </div>
        {role === "manager"? (
            <>
              {item && item.Status === "Published"? (
                  <Link className={styles.contactUs} href={`/pages/manager/publication-manager/${item.Id}`} >
                    <b className={styles.b2}>Детальніше</b>
                  </Link>
              ) : item && item.Status === "Editing"?(

                  <div className={styles.contactUsGroup}>
                    <button className={styles.contactUs} type={"button"} onClick={() => setBoolSendToEditing(!boolSendToEditing)}>
                      <b className={styles.b2}>Відправити редактору</b>
                    </button>
                    <button className={styles.contactUs}  type={"button"} onClick={() => setBoolPrice(!boolPrice)}>
                      <b className={styles.b2}>Визначити вартість публікації</b>
                    </button>
                    <Link className={styles.contactUs} href={`/pages/manager/publication-manager/${item.Id}`} >
                      <b className={styles.b2}>Детальніше</b>
                    </Link>
                  </div>

              ) : item && item.Status === "Request"?(
                  <div className={styles.contactUsGroup}>
                    <button className={styles.contactUs} type={"button"} onClick={() => setBoolSendToEditing(!boolSendToEditing)} >
                      <b className={styles.b2}>Відправити редактору</b>
                    </button>
                    <Link className={styles.contactUs} href={`/pages/manager/publication-manager/${item.Id}`} >
                      <b className={styles.b2}>Детальніше</b>
                    </Link>
                  </div>
              ) : (<></>)
              }
            </>
        ) : role === "author"? (
            <>
                <Link className={styles.contactUs} href={`/pages/author/writings-author/${item.Id}`} >
                    <b className={styles.b2}>Детальніше</b>
                </Link>
            </>
        ) : role === "editor"? (
            <>
                <Link className={styles.contactUs} href={`/pages/editor/editing-editor/${item.Id}`} >
                    <b className={styles.b2}>Детальніше</b>
                </Link>
            </>
        ):(
            <></>
        )}
        {boolSendToEditing? (
          <>
            <SendToEditing />
          </>
        ) : (
            <>
            </>
        )
        }
        {boolPrice? (
            <>
              <Container />
            </>
        ) : (
            <>
            </>
        )
        }
    </div>
    </div>
  )
};




export default ContainerForm;

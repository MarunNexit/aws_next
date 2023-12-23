
import styles from "./page.module.css";
import Header from "@/app/components/header";
import GetInfoWritings from "@/app/components/get-info-writings";

const PublicationManager = () => {
    return (
        <div className={styles.publicationmanager}>
            <Header value={"manager"} />

            <div className={styles.publicationmanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.frameParent}>
                <div className={styles.parent}>
                    <b className={styles.b}>Публікації</b>
                    <div className={styles.largenormaljustifyactiveParent}>
                        <button className={styles.largenormaljustifyactive}>
                            <b className={styles.b1}>Пошук</b>
                        </button>
                        <button className={styles.largenormaljustifyactive}>
                            <b className={styles.b1}>Дати</b>
                        </button>
                    </div>
                </div>
                <GetInfoWritings paramWritings = {"AllWritingsRequest"} textParam = {"Нові рукописи від авторів"} role={"manager"}/>
                <GetInfoWritings paramWritings = {"AllWritingsEdited"} textParam = {"На редагуванні або рецензуванні"} role={"manager"}/>
                <GetInfoWritings paramWritings = {"AllWritingsPublished"} textParam = {"Опубліковані видання"} role={"manager"}/>
            </div>
        </div>
    );
};

export default PublicationManager;

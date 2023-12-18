import PublishHouseContainer from "../../../components/publish-house-container";
import Container from "../../../components/container";
import EditedManuscriptsContainer from "../../../components/edited-manuscripts-container";
import ContainerForm2 from "../../../components/container-form2";
import styles from "./page.module.css";
import Header from "@/app/components/header";

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
                <Container />
                <EditedManuscriptsContainer />
                <ContainerForm2 />
            </div>
        </div>
    );
};

export default PublicationManager;

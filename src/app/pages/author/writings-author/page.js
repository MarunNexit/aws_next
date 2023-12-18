import PublishHouseContainer from "../../../components/publish-house-container";
import ContainerForm from "../../../components/container-form";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const WritingsAuthor = () => {
    return (
        <div className={styles.writingsauthor}>
            <Header value={"author"} />
            <div className={styles.writingsauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
                <b className={styles.b}>Мої рукописи</b>
                <ContainerForm propAlignSelf="stretch" />
                <div className={styles.frameItem} />
                <ContainerForm propAlignSelf="unset" />
                <div className={styles.frameItem} />
                <ContainerForm propAlignSelf="unset" />
                <div className={styles.frameItem} />
                <ContainerForm propAlignSelf="unset" />
                <div className={styles.frameItem} />
            </div>
        </div>
    );
};

export default WritingsAuthor;

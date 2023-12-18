import AdRequestFormContainer from "../../../components/ad-request-form-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const AdvertisementPageManager = () => {
    return (
        <div className={styles.advertisementpagemanager}>
            <Header value={"manager"} />
            <div className={styles.advertisementpagemanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
                <b className={styles.b4}>Реклама №2</b>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                        <div className={styles.wrapper1}>
                            <b className={styles.b5}>Дані щодо реклами:</b>
                        </div>
                        <div className={styles.frameContainer}>
                            <div className={styles.frameWrapper1}>
                                <div className={styles.frameParent1}>
                                    <div className={styles.idParent}>
                                        <b className={styles.id}>Користувач ID:</b>
                                        <div className={styles.div}>1</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <div className={styles.id}>
                                            <b>Рекламодавець Email:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>Рекламодавець@</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <div className={styles.id}>
                                            <b>Компанія:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>Компанія</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <div className={styles.id}>
                                            <b>Видання ID:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>12</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <div className={styles.id}>
                                            <b>Видання Назва:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>Видання №1</div>
                                    </div>
                                    <div className={styles.parent2}>
                                        <div className={styles.id}>
                                            <b>Стан</b>
                                            <span>:</span>
                                        </div>
                                        <div className={styles.id}>Активний</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <div className={styles.id}>
                                            <b>Ціна</b>
                                            <span>:</span>
                                        </div>
                                        <div className={styles.div}>100</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <b className={styles.id}>Дата початку:</b>
                                        <div className={styles.div}>12.11.2011</div>
                                    </div>
                                    <div className={styles.idParent}>
                                        <b className={styles.id}>Дата закінчення:</b>
                                        <div className={styles.div}>13.11.2011</div>
                                    </div>
                                </div>
                            </div>
                            <AdRequestFormContainer adRequestFileText="Ви можете завантажити файл запиту на рекламу" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisementPageManager;

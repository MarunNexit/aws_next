import AdvertListContainer from "../../../components/advert-list-container";
import styles from "./page.module.css";
import Header from "@/app/components/header";

const AdvertisingManager = () => {
    return (
        <div className={styles.advertisingmanager}>
            <Header value={"manager"} />
            <div className={styles.advertisingmanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.frameGroup}>
                <div className={styles.parent}>
                    <b className={styles.b4}>Реклама</b>
                    <button className={styles.contactUs}>
                        <b className={styles.b5}>Рекламні простори</b>
                    </button>
                </div>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameContainer}>
                        <div className={styles.wrapper1}>
                            <b className={styles.b4}>Нові запити на рекламу</b>
                        </div>
                        <div className={styles.group}>
                            <b className={styles.div}>Рекламодавець</b>
                            <b className={styles.div}>Видання</b>
                            <b className={styles.div}>Ціна</b>
                            <b className={styles.div}>Дата початку</b>
                            <b className={styles.div}>Дата закінчення</b>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.frameItem} />
                        <div className={styles.group}>
                            <div className={styles.div}>Рекламодавець №1</div>
                            <div className={styles.div}>Видання №1</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.parent2}>
                            <div className={styles.div}>Рекламодавець №2</div>
                            <div className={styles.div}>Видання №2</div>
                            <div className={styles.div}>300</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.div}>Рекламодавець №3</div>
                            <div className={styles.div}>Видання №3</div>
                            <div className={styles.div}>500</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.parent2}>
                            <div className={styles.div}>Рекламодавець №4</div>
                            <div className={styles.div}>Видання №4</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.div}>Рекламодавець №5</div>
                            <div className={styles.div}>Видання №5</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                    </div>
                </div>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameContainer}>
                        <div className={styles.wrapper1}>
                            <b className={styles.b4}>Активні реклами?????</b>
                        </div>
                        <div className={styles.group}>
                            <b className={styles.div}>Рекламодавець</b>
                            <b className={styles.div}>Видання</b>
                            <b className={styles.div}>Ціна</b>
                            <b className={styles.div}>Статус</b>
                            <b className={styles.div}>Дата початку</b>
                            <b className={styles.div}>Дата закінчення</b>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.frameItem} />
                        <div className={styles.group}>
                            <div className={styles.div}>Рекламодавець №1</div>
                            <div className={styles.div}>Видання №1</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.parent2}>
                            <div className={styles.div}>Рекламодавець №2</div>
                            <div className={styles.div}>Видання №2</div>
                            <div className={styles.div}>300</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.div}>Рекламодавець №3</div>
                            <div className={styles.div}>Видання №3</div>
                            <div className={styles.div}>500</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.parent2}>
                            <div className={styles.div}>Рекламодавець №4</div>
                            <div className={styles.div}>Видання №4</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                        <div className={styles.group}>
                            <div className={styles.div}>Рекламодавець №5</div>
                            <div className={styles.div}>Видання №5</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>1000</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <div className={styles.div}>2023-12-10 15:30:00</div>
                            <b className={styles.div}>Детальніше</b>
                        </div>
                    </div>
                </div>
                <div className={styles.frameWrapper}>
                    <AdvertListContainer />
                </div>
            </div>
        </div>
    );
};

export default AdvertisingManager;

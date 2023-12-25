"use client"
import Header from "../../../components/header";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {getUserInfo} from "@/app/functions/GetUserInfo";
import ContainerForm1 from "@/app/components/container-form1";

const ProfileAdvertiser = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect( () => {
        async function UserInfo() {
            try {
                const temp = await getUserInfo()
                console.log(temp)

                await setUserInfo(
                    temp,
                );

            } catch (error) {
                console.log(error)
            }
        }
        if (typeof window !== 'undefined') {
            UserInfo()
        } else {
            // код, который выполнится только на сервере
        }
    }, []);

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo]);

    return (
        <div className={styles.profileadvertiser}>
            <Header value={"advertiser"} />
            <div className={styles.profileadvertiserInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.profileadvertiserChild}>
                <div className={styles.frameParent}>
                    <ContainerForm1 name={userInfo.UserName} email = {userInfo.Email} phone = {userInfo.Phone} addition = {userInfo.ContactInform} role = {"advertiser"} company={userInfo.CompanyName} web={userInfo.Website}/>
                    <div className={styles.frameItem} />
                    <div className={styles.frameParent1}>
                        <div className={styles.parent5}>
                            <b className={styles.b8}>Мої запити на рекламу</b>
                            <div className={styles.frameWrapper1}>
                                <div className={styles.frameWrapper}>
                                    <div className={styles.wrapper}>
                                        <b className={styles.b9}>
                                            Нема активних запитів на рекламу
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.parent6}>
                            <b className={styles.b10}>Мої запити на рекламу</b>
                            <div className={styles.frameWrapper3}>
                                <div className={styles.frameParent2}>
                                    <div className={styles.parent7}>
                                        <b className={styles.b9}>Журнал 1</b>
                                        <b className={styles.b12}>Статус</b>
                                    </div>
                                    <div className={styles.frame}>
                                        <div className={styles.b1}>
                                            Наша сучасна типографія обладнана найновішим обладнанням
                                            для друку книг та журналів. Друкуємо Ваші Твори. Наша
                                            сучасна типографія обладнана найновішим обладнанням для
                                            друку книг та журналів. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                            Друкуємо Ваші Твори. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.frameItem} />
                            <div className={styles.frameWrapper3}>
                                <div className={styles.frameParent2}>
                                    <div className={styles.parent7}>
                                        <b className={styles.b13}>Подані рукописи</b>
                                        <b className={styles.b12}>Статус</b>
                                    </div>
                                    <div className={styles.frame}>
                                        <div className={styles.b1}>
                                            Наша сучасна типографія обладнана найновішим обладнанням
                                            для друку книг та журналів. Друкуємо Ваші Твори. Наша
                                            сучасна типографія обладнана найновішим обладнанням для
                                            друку книг та журналів. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                            Друкуємо Ваші Твори. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.parent5}>
                            <b className={styles.b8}>Діючі реклами</b>
                            <div className={styles.frameWrapper1}>
                                <div className={styles.frameWrapper}>
                                    <div className={styles.wrapper}>
                                        <b className={styles.b9}>
                                            Нема активних запитів на рекламу
                                        </b>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.frameItem} />
                        </div>
                        <div className={styles.parent6}>
                            <b className={styles.b10}>Діючі реклами</b>
                            <div className={styles.frameWrapper3}>
                                <div className={styles.frameParent2}>
                                    <div className={styles.parent7}>
                                        <b className={styles.b9}>Журнал 1</b>
                                        <b className={styles.b12}>Статус</b>
                                    </div>
                                    <div className={styles.frame}>
                                        <div className={styles.b1}>
                                            Наша сучасна типографія обладнана найновішим обладнанням
                                            для друку книг та журналів. Друкуємо Ваші Твори. Наша
                                            сучасна типографія обладнана найновішим обладнанням для
                                            друку книг та журналів. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                            Друкуємо Ваші Твори. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.frameItem} />
                            <div className={styles.frameWrapper3}>
                                <div className={styles.frameParent2}>
                                    <div className={styles.parent7}>
                                        <b className={styles.b13}>Подані рукописи</b>
                                        <b className={styles.b12}>Статус</b>
                                    </div>
                                    <div className={styles.frame}>
                                        <div className={styles.b1}>
                                            Наша сучасна типографія обладнана найновішим обладнанням
                                            для друку книг та журналів. Друкуємо Ваші Твори. Наша
                                            сучасна типографія обладнана найновішим обладнанням для
                                            друку книг та журналів. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                            Друкуємо Ваші Твори. Наша сучасна типографія обладнана
                                            найновішим обладнанням для друку книг та журналів.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.parent5}>
                            <b className={styles.b8}>Статистика по рекламі</b>
                            <div className={styles.textFieldParent}>
                                <div className={styles.textField}>
                                    <div className={styles.div11}>
                                        <p className={styles.p}>{`Кількість активних запитів `}</p>
                                        <p className={styles.p}>на рекламу</p>
                                    </div>
                                    <div className={styles.div12}>30</div>
                                </div>
                                <div className={styles.textField}>
                                    <div className={styles.div13}>Кількість діючих реклам</div>
                                    <div className={styles.div12}>30</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAdvertiser;

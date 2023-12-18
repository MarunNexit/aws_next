"use client"

import FormContainer1 from "../../../components/form-container1";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import {useEffect, useState} from "react";
import {getUserInfo} from "@/app/functions/GetUserInfo";
import ContainerForm1 from "@/app/components/container-form1";

const ProfileAuthor = () => {

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
        UserInfo()
    }, []);

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo]);

    return (
        <div className={styles.profileauthor}>
            <Header value={"author"} />
            <div className={styles.profileauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.profileauthorChild}>
                <div className={styles.frameParent}>
                    <ContainerForm1 name={userInfo.UserName} email = {userInfo.Email} phone = {userInfo.Phone} department= {userInfo.EditorDepartment} addition = {userInfo.ContactInform} role = {"author"}/>
                    <div className={styles.frameItem} />
                    <div className={styles.frameParent1}>
                        <div className={styles.parent3}>
                            <b className={styles.b6}>Продажі рукописів</b>
                            <div className={styles.textFieldParent}>
                                <div className={styles.textField}>
                                    <div className={styles.div5}>
                                        <p className={styles.p}>{`Загальна кількість `}</p>
                                        <p className={styles.p}>рукописів</p>
                                    </div>
                                    <div className={styles.div6}>30</div>
                                </div>
                                <div className={styles.textField}>
                                    <div className={styles.div5}>
                                        Кількість опублікованих рукописів
                                    </div>
                                    <div className={styles.div6}>30</div>
                                </div>
                                <div className={styles.textField}>
                                    <div className={styles.div5}>
                                        <p className={styles.p}>{`Отриманий дохід `}</p>
                                        <p className={styles.p}>(1 місяць)</p>
                                    </div>
                                    <div className={styles.div6}>$300</div>
                                </div>
                            </div>
                            <FormContainer1 />
                        </div>
                        <div className={styles.parent4}>
                            <b className={styles.b7}>Останні рукописи</b>
                            <div className={styles.frameWrapper1}>
                                <div className={styles.frameParent2}>
                                    <div className={styles.parent5}>
                                        <b className={styles.b8}>Подані рукописи</b>
                                        <b className={styles.b9}>Статус</b>
                                    </div>
                                    <div className={styles.wrapper}>
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
                            <div className={styles.frameInner} />
                            <div className={styles.frameWrapper1}>
                                <div className={styles.frameParent2}>
                                    <div className={styles.parent5}>
                                        <b className={styles.b10}>Подані рукописи</b>
                                        <b className={styles.b9}>Статус</b>
                                    </div>
                                    <div className={styles.wrapper}>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAuthor;
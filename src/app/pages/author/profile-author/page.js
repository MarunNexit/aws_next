"use client"

import FormContainer1 from "../../../components/form-container1";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import {useEffect, useState} from "react";
import {getUserInfo} from "@/app/functions/GetUserInfo";
import ContainerForm1 from "@/app/components/container-form1";
import GetInfoWritings from "@/app/components/get-info-writings";

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
        if (typeof window !== 'undefined') {
            UserInfo()
        } else {
            // код, который выполнится только на сервере
        }
    }, []);


    return (
        <div className={styles.profileauthor}>
            <Header value={"author"} />
            <div className={styles.profileauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.profileauthorChild} >
                <div className={styles.frameParent}>
                    <ContainerForm1 name={userInfo.UserName} email = {userInfo.Email} phone = {userInfo.Phone} department= {userInfo.EditorDepartment} addition = {userInfo.ContactInform} role = {"author"}/>
                    <div className={styles.frameItem} />
                    <div className={styles.frameParent1}>
                        <div className={styles.parent3} id={"statistic"}>
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
                            <FormContainer1 state={"week"} role={"author"}/>
                        </div>
                        <div className={styles.parent4}>
                            <b className={styles.b7}>Останні рукописи</b>
                            <GetInfoWritings paramWritings = {"myWritings"} textParam = {"false"} numberMaxWritings={"3"} role={"author"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileAuthor;

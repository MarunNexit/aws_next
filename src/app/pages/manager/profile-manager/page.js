"use client"
import ContainerForm3 from "../../../components/container-form3";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import {useEffect, useState} from "react";
import {getUserInfo} from "@/app/functions/GetUserInfo";

const ProfileManager = () => {
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
        <div className={styles.profilemanager}>
            <Header value={"manager"} />

            <div className={styles.profilemanagerInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.profilemanagerChild}>
                <ContainerForm3 userInfo = {userInfo}/>
            </div>
        </div>
    );
};

export default ProfileManager;

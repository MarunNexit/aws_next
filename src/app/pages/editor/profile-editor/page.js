'use client'
import Header from "../../../components/header";
import ContainerForm4 from "../../../components/container-form4";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {getUserInfo} from "@/app/functions/GetUserInfo";



const ProfileEditor = () => {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        async function UserInfo() {
            try {
                if (typeof window !== 'undefined') {
                    const temp = await getUserInfo()
                    console.log(temp)

                    await setUserInfo(temp);
                }
            } catch (error) {
                console.log(error)
            }
        }

        UserInfo();
    }, []);

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo]);


    return (
        <div className={styles.profileeditor}>
            <Header value={"editor"} />
            <div className={styles.profileeditorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.profileeditorChild}>
                <ContainerForm4 userInfo = {userInfo}/>
            </div>
        </div>
    );
};

export default ProfileEditor;

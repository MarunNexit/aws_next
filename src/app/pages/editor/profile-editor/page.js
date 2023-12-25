"use client"
import Header from "../../../components/header";
import styles from "./page.module.css";
import {useEffect, useState} from "react";
import {getUserInfo} from "@/app/functions/GetUserInfo";



const ProfileEditor = () => {
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
        <div className={styles.profileeditor}>
            <Header value={"editor"} />
            <div className={styles.profileeditorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.profileeditorChild}>

            </div>
        </div>
    );
};

export default ProfileEditor;

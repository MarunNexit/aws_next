"use client"
import Header from "../../../components/header";
import ContainerForm4 from "../../../components/container-form4";
import styles from "./page.module.css";
import {GetAllUsersInfo} from "@/app/functions/GetAllUsersInfo";
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
        <div className={styles.profileeditor}>

        </div>
    );
};

export default ProfileEditor;

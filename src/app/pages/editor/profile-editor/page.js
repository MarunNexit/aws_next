"use client"

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
        <div >

        </div>
    );
};

export default ProfileEditor;

"use client"
import ContainerForm from "../components/container-form";
import {useEffect, useState} from "react";
import {getAuthorManuscripts} from "@/app/functions/manuscripts/GetAuthorManuscripts";
import styles from "./get-info-writings.module.css"
import {GetAllUsersInfo} from "@/app/functions/GetAllUsersInfo";
import {GetAllManuscripts} from "@/app/functions/manuscripts/GetAllManuscripts";
import {GetAllManuscriptsStatus} from "@/app/functions/manuscripts/GetAllManuscriptsStatus";

const GetInfoWritings = ({paramWritings, textParam, numberMaxWritings, role}) => {

    const [writingsAutor, setWritingsAutor] = useState([]);

    useEffect( () => {
        async function MyWritingsInfo() {
            try {
                const temp = await getAuthorManuscripts()
                console.log(temp)

                await setWritingsAutor(
                    temp,
                );

            } catch (error) {
                console.log(error)
            }
        }

        async function AllWritingsInfo() {
            try {
                const temp = await GetAllManuscripts()
                console.log(temp)

                await setWritingsAutor(
                    temp,
                );

            } catch (error) {
                console.log(error)
            }
        }

        async function AllWritingsInfoEdited() {
            try {
                const temp = await GetAllManuscriptsStatus("Editing")
                console.log(temp)

                await setWritingsAutor(
                    temp,
                );

            } catch (error) {
                console.log(error)
            }
        }

        async function AllWritingsInfoPublished() {
            try {
                const temp = await GetAllManuscriptsStatus("Published")
                console.log(temp)

                await setWritingsAutor(
                    temp,
                );

            } catch (error) {
                console.log(error)
            }
        }

        async function AllWritingsInfoRequest() {
            try {
                const temp = await GetAllManuscriptsStatus("Request")
                console.log(temp)

                await setWritingsAutor(
                    temp,
                );

            } catch (error) {
                console.log(error)
            }
        }

        if(paramWritings === "myWritings"){
            MyWritingsInfo()
        }
        else if(paramWritings === "AllWritings"){
            AllWritingsInfo()
        }
        else if(paramWritings === "AllWritingsEdited"){
            AllWritingsInfoEdited()
        }
        else if(paramWritings === "AllWritingsPublished"){
            AllWritingsInfoPublished()
        }
        else if(paramWritings === "AllWritingsRequest"){
            AllWritingsInfoRequest()
        }
    }, []);

    useEffect(() => {
        console.log(writingsAutor)
    }, [writingsAutor]);



    return (
        <div className={textParam !== "false" ? styles.parent : ''}>
            {textParam !== "false" ?
            ( <b className={styles.b}>{textParam}</b>):(<></>)
            }
            {
                writingsAutor
                    .sort((a, b) => b.Id - a.Id)
                    .slice(0, numberMaxWritings ? 3 : undefined)
                    .map((item, index) => (
                        <div key={index}>
                            <ContainerForm propAlignSelf="stretch" item={item} paramWritings={paramWritings} role={role}/>
                            <div className={styles.frameItem} />
                        </div>
                    ))}
        </div>
    );
};

export default GetInfoWritings;

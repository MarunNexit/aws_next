"use client"
import ContainerForm from "../../../components/container-form";
import styles from "./page.module.css";
import Header from "@/app/components/header";
import {useEffect, useState} from "react";
import {getAuthorManuscripts} from "@/app/functions/manuscripts/GetAuthorManuscripts";
import GetInfoWritings from "@/app/components/get-info-writings";

const WritingsAuthor = () => {

    const [writingsAutor, setWritingsAutor] = useState([]);

    useEffect( () => {
        async function WritingsInfo() {
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
        WritingsInfo()
    }, []);

    useEffect(() => {
        console.log(writingsAutor)
    }, [writingsAutor]);



    return (
        <div className={styles.writingsauthor}>
            <Header value={"author"} />
            <div className={styles.writingsauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <GetInfoWritings paramWritings = {"myWritings"} textParam = {"Мої рукописи"} role={"author"}/>
        </div>
    );
};

export default WritingsAuthor;

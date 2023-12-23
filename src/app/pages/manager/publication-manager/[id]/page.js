"use client"
import AdRequestFormContainer from "../../../../components/ad-request-form-container";
import styles from "./page.module.css";
import {useRouter, useSearchParams} from "next/navigation";
import { usePathname } from 'next/navigation'

import Header from "@/app/components/header";
import {useEffect, useState} from "react";
import {getServerSideProps} from "@/app/functions/manuscripts/GetServerDataManuscript";
import {getUserInfo} from "@/app/functions/GetUserInfo";
import FormContainer5 from "@/app/components/form-container5";


const EditingManuscriptManager = () => {

    const router = useRouter();
    const pathname = usePathname()
    const [idManuscript, setIdManuscript] = useState([]);
    const [manuscriptData, setManuscriptData] = useState([]);
    const [manuscriptType, setManuscriptType] = useState("");

    const [dateAdding, setDateAdding] = useState("");
    const [editionTitle, setEditionTitle] = useState("");
    const [numberPages, setNumberPages] = useState("");
    const [editionDescription, setEditionDescription] = useState("");
    const [printingTitle, setPrintingTitle] = useState("");
    const [formatPages, setFormatPages] = useState("");
    const [status, setStatus] = useState("");

    const [boolReady, setBoolReady] = useState("");

    const [manuscriptChangedData, setManuscriptChangedData] = useState({manuscriptType: ""});



    useEffect(() => {
        console.log(pathname)
        const segments = pathname.split("/"); // Розбиваємо шлях за допомогою "/"
        setIdManuscript(segments[segments.length - 1]);
    }, [pathname]);

    useEffect(() => {
        async function GetManuscriptData() {
            try {
                console.log(idManuscript)

                const data = await getServerSideProps(idManuscript);

                if(data){
                    await setManuscriptData(data);
                }

            } catch (error) {
                console.log(error)
            }
        }
        GetManuscriptData()
    }, [idManuscript]);


    useEffect(() => {
        console.log(manuscriptData)
        if(manuscriptData){
            setDateAdding(manuscriptData.DateAdding)
            setEditionTitle(manuscriptData.EditionTitle)
            setNumberPages(manuscriptData.NumberPages)
            setEditionDescription(manuscriptData.EditionDescription)
            setFormatPages(manuscriptData.FormatPages)
            setPrintingTitle(manuscriptData.PrintingTitle)


            if(manuscriptData.Status === "Editing"){
                setStatus("Редагування")
            }
            else if(manuscriptData.Status === "Published"){
                setStatus("Опублікована")
            }
            else{
                setStatus("Розглядання запиту")
            }

            if(manuscriptData.EditionType === "book"){
                setManuscriptType("Книга")
            }
            else if(manuscriptData.EditionType === "magazine"){
                setManuscriptType("Журнал")
            }


        }

    }, [manuscriptData]);


    useEffect(() => {
        console.log(boolReady)
    }, [boolReady]);


    useEffect(() => {

        const manuscriptNewData = {
            manuscriptType: manuscriptType,
            dateAdding: dateAdding,
            editionTitle: editionTitle,
            numberPages: numberPages,
            editionDescription: editionDescription,
            printingTitle: printingTitle,
            formatPages: formatPages,
            status: status,
        };

        setManuscriptChangedData(manuscriptNewData)
        console.log(manuscriptNewData)

    }, [manuscriptType]);

    useEffect(() => {

        if(manuscriptChangedData.manuscriptType !== ""){
            setBoolReady(true)
        }
    }, [manuscriptChangedData]);


    return (
        <div className={styles.newpageForManuscriptauthor}>
            <Header value={"manager"} />
            <div className={styles.newpageForManuscriptauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
                <b className={styles.b4}>Рукопис</b>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                        <div className={styles.frameContainer}>
                            { boolReady? (
                                <FormContainer5 manuscriptData={manuscriptChangedData} TitleContainer = {"Дані щодо рукопису"} role = {"manager"} boolReady={boolReady}/>
                            ):(
                                <></>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditingManuscriptManager;

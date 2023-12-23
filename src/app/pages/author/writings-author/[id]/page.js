"use client"
import AdRequestFormContainer from "../../../../components/ad-request-form-container";
import styles from "./page.module.css";
import {useRouter, useSearchParams} from "next/navigation";
import { usePathname } from 'next/navigation'

import Header from "@/app/components/header";
import {useEffect, useState} from "react";
import {getServerSideProps} from "@/app/functions/manuscripts/GetServerDataManuscript";
import {getUserInfo} from "@/app/functions/GetUserInfo";


const ManuscriptPageAuthor = () => {

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

                console.log(data)

                await setManuscriptData(data);

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

            if(manuscriptData.EditionType === "book"){
                setManuscriptType("Книга")
            }
            else if(manuscriptData.EditionType === "magazine"){
                setManuscriptType("Журнал")
            }

            if(manuscriptData.Status === "Editing"){
                setStatus("Редагування")
            }
            else if(manuscriptData.Status === "Published"){
                setStatus("Опублікована")
            }
            else{
                setStatus("Розглядання запиту")
            }

            console.log(manuscriptData.EditionTitle)
        }

    }, [manuscriptData]);

    return (
        <div className={styles.newpageForManuscriptauthor}>
            <Header value={"author"} />
            <div className={styles.newpageForManuscriptauthorInner}>
                <div className={styles.frameChild} />
            </div>
            <div className={styles.parent}>
                <b className={styles.b4}>Рукопис</b>
                <div className={styles.frameWrapper}>
                    <div className={styles.frameGroup}>
                        <div className={styles.wrapper1}>
                            <b className={styles.b5}>Дані щодо рукопису:</b>
                        </div>
                        <div className={styles.frameContainer}>
                            <div className={styles.frameWrapper1}>
                                <div className={styles.frameParent1}>
                                    <div className={styles.group}>
                                        <b className={styles.email}>Автор:</b>
                                        <div className={styles.div}>Ви</div>
                                    </div>
                                    <div className={styles.group}>
                                        <b className={styles.email}>Тип рукопису</b>
                                        <div className={styles.div}>{
                                            manuscriptType
                                        }</div>
                                    </div>
                                    <div className={styles.group}>
                                        <div className={styles.email}>
                                            <b>Заголовок:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>{editionTitle}</div>
                                    </div>
                                    <div className={styles.group}>
                                        <div className={styles.email}>
                                            <b>Опис:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>
                                            {editionDescription}
                                        </div>
                                    </div>
                                    <div className={styles.group}>
                                        <div className={styles.email}>
                                            <b>Кількість сторінок:</b>
                                            <span>{` `}</span>
                                        </div>
                                        <div className={styles.div}>{numberPages}</div>
                                    </div>
                                    <div className={styles.group}>
                                        <b className={styles.email}>Дата додавання:</b>
                                        <div className={styles.div}>{dateAdding}</div>
                                    </div>
                                    <div className={styles.group}>
                                        <b className={styles.email}>Статус:</b>
                                        <div className={styles.div}>{status}</div>
                                    </div>
                                    {status === "Опублікована" ? (
                                        <section>
                                            <div className={styles.group}>
                                                <b className={styles.email}>Заголовок публікації:</b>
                                                <div className={styles.div}>{printingTitle}</div>
                                            </div>
                                            <div className={styles.group}>
                                                <b className={styles.email}>Формат сторінок:</b>
                                                <div className={styles.div}>{formatPages}</div>
                                            </div>
                                        </section>
                                    ) : (
                                        <section>
                                        </section>
                                    )}
                                </div>
                            </div>
                            <AdRequestFormContainer adRequestFileText="Ви можете завантажити файл запиту на рекламу" BoolUpload={false} Data = {manuscriptData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManuscriptPageAuthor;

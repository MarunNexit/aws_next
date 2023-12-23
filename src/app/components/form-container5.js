"use client"
import FormContainer2 from "./form-container2";
import styles from "./form-container5.module.css";
import {useEffect, useState} from "react";
import AdRequestFormContainer from "@/app/components/ad-request-form-container";
import {UploadFileToS3} from "@/app/functions/UploadFileToS3";
import {SetNewManuscript} from "@/app/functions/manuscripts/SetNewManuscript";
import {getUserInfo} from "@/app/functions/GetUserInfo";


const FormContainer5 = ({manuscriptData, TitleContainer, role, boolReady}) => {

    const [type, setType] = useState("magazine");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [numberPage, setNumberPage] = useState("");
    const [file, setFile] = useState("");
    const [format, setFormat] = useState("A4");
    const [status, setStatus] = useState();

    const [boolGetReady, setBoolGetReady] = useState(false);


    const OnManuscriptDownload = (file) => {
        console.log(file)
        setFile(file)
    };

    useEffect(() => {
        // Перевірка умови
        if (role === "manager" && boolReady === true) {
            setType(manuscriptData.manuscriptType)
            setTitle(manuscriptData.editionTitle)
            setDescription(manuscriptData.editionDescription)
            setNumberPage(manuscriptData.numberPages)
            setFormat(manuscriptData.formatPages)
            setStatus(manuscriptData.status)
            console.log("asda")
            console.log(manuscriptData)
        } else {

        }
    }, [boolReady]); // Залежність від role

    useEffect(() => {
        console.log("aaaaaaa")
        console.log("aaaaaaa")
        console.log("aaaaaaa")
        console.log("aaaaaaa")
        console.log("aaaaaaa")
        console.log("aaaaaaa")

        setBoolGetReady(true)
    }, [status]); // Залежність від role



    const SubmitRequestAuthorManuscript = () => {
        async function UploadFile() {
            try {
                console.log(file)
                const userItem = await getUserInfo()
                const requestBody = {
                    AuthorId: userItem.Id,
                    EditionType: type,
                    EditionTitle: title,
                    EditionDescription: description,
                    LinkForFile: "https://filespublishhouse.s3.eu-central-1.amazonaws.com/image_manuscripts/" + file.name,
                    NumberPages: numberPage,
                    FormatPages:format,
                    Status: "Request"
                };
                console.log(requestBody)
                const check = await SetNewManuscript(requestBody);
                if(check){
                    await UploadFileToS3(file);
                }
            } catch (error) {
                console.log(error)
            }
        }

        if(file){
            UploadFile()
        }
    };


    return (
        <>
            {role === "manager"? (
                <>
                    {boolGetReady? (
                        <form className={styles.destination} >
                            <b className={styles.b}>{TitleContainer}</b>
                            <b className={styles.b1}>
                                <span>Тип рукопису</span>
                                <span className={styles.span}> *</span>
                            </b>
                            <div className={styles.input}>
                                <select className={styles.textField}
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}>
                                    <option value="magazine">Журнал</option>
                                    <option value="book">Книга</option>
                                    <option value="booklet">Буклет</option>
                                </select>
                            </div>
                            <b className={styles.b1}>
                                <span>{`Назва `}</span>
                                <span className={styles.span}>*</span>
                            </b>
                            <div className={styles.input}>
                                <input className={styles.textField}
                                       type="text"
                                       value={title}
                                       onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <b className={styles.b1}>
                                <span>{`Опис `}</span>
                                <span className={styles.span}>*</span>
                            </b>
                            <div className={styles.input2}>
        <textarea className={styles.textField2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
        />
                            </div>
                            <b className={styles.b1}>Кількість сторінок</b>
                            <div className={styles.input}>
                                <input className={styles.textField}
                                       type="text"
                                       value={numberPage}
                                       onChange={(e) => setNumberPage(e.target.value)}
                                />
                            </div>
                            <b className={styles.b1}>Формат сторінок</b>
                            <div className={styles.input}>
                                <select className={styles.textField}
                                        value={format}
                                        onChange={(e) => setFormat(e.target.value)}>
                                    <option value="A4">А4</option>
                                    <option value="A3">А3</option>
                                    <option value="A2">А2</option>
                                </select>
                            </div>

                            <div className={styles.input}>
                                <select className={styles.textField}
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}>
                                    <option value="request">Запит</option>
                                    <option value="editing">Редагування</option>
                                    <option value="published">Опублікований</option>
                                </select>
                            </div>

                            <AdRequestFormContainer onFileUpload={OnManuscriptDownload} BoolUpload={true}/>
                            <button className={styles.contactUs} type={"button"} onClick={SubmitRequestAuthorManuscript}>
                                <b className={styles.b5}>Оновити дані</b>
                            </button>
                        </form>
                    ):(
                        <>Waiting...</>
                    )}
                </>
            ):(
                <form className={styles.destination} >
                    <b className={styles.b}>{TitleContainer}</b>
                    <b className={styles.b1}>
                        <span>Тип рукопису</span>
                        <span className={styles.span}> *</span>
                    </b>
                    <div className={styles.input}>
                        <select className={styles.textField}
                                value={type}
                                onChange={(e) => setType(e.target.value)}>
                            <option value="magazine">Журнал</option>
                            <option value="book">Книга</option>
                            <option value="booklet">Буклет</option>
                        </select>
                    </div>
                    <b className={styles.b1}>
                        <span>{`Назва `}</span>
                        <span className={styles.span}>*</span>
                    </b>
                    <div className={styles.input}>
                        <input className={styles.textField}
                               type="text"
                               value={title}
                               onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <b className={styles.b1}>
                        <span>{`Опис `}</span>
                        <span className={styles.span}>*</span>
                    </b>
                    <div className={styles.input2}>
        <textarea className={styles.textField2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
        />
                    </div>
                    <b className={styles.b1}>Кількість сторінок</b>
                    <div className={styles.input}>
                        <input className={styles.textField}
                               type="text"
                               value={numberPage}
                               onChange={(e) => setNumberPage(e.target.value)}
                        />
                    </div>
                    <b className={styles.b1}>Формат сторінок</b>
                    <div className={styles.input}>
                        <select className={styles.textField}
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}>
                            <option value="A4">А4</option>
                            <option value="A3">А3</option>
                            <option value="A2">А2</option>
                        </select>
                    </div>
                    <AdRequestFormContainer onFileUpload={OnManuscriptDownload} BoolUpload={true}/>
                    <button className={styles.contactUs} type={"button"} onClick={SubmitRequestAuthorManuscript}>
                        <b className={styles.b5}>Подати рукопис</b>
                    </button>
                </form>
            )}
        </>

  );
};

export default FormContainer5;

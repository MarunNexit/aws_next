import React, {useRef, useState} from "react";
import styles from "./ad-request-form-container.module.css";
import FormContainer2 from "@/app/components/form-container2";

const AdRequestFormContainer = ({ adRequestFileText, onFileUpload,  BoolUpload, Data}) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        onFileUpload(file);
    };

    const handleFileClick = () => {
        // Викликайте клік на прихованому введенні файлу, коли користувач клікає на ваш елемент
        fileInputRef.current.click();
    };

    const handleUploadClick = () => {
        // Створіть посилання на новій вкладці
        const downloadLink = document.createElement("a");
        downloadLink.href = Data.LinkForFile;
        downloadLink.target = "_blank";
        downloadLink.download = "manuscript_file_" + Data.Id; // Можете також вказати назву файлу, що завантажується

        console.log(downloadLink)
        // Додайте елемент в DOM, спрямуйте його та видаліть його
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };


    return (
        <div className={styles.frameParent} >
            {BoolUpload ? (
                // Show this when enableConfirm is true
                <>
                    {selectedFile ? (
                        <>
                            <div className={styles.wrapper} onClick={handleFileClick}>
                                <b className={styles.b}>{selectedFile.name}</b>
                            </div>
                        </>
                    ):(
                        <>
                            <FormContainer2 OnUploadFieldClick={handleFileClick}/>
                        </>
                    )}
                    <div className={styles.fileInputContainer}>
                        <input style={{opacity: 0}}
                               id="fileInput"
                               type="file"
                               accept=".pdf, .doc, .docx"
                               ref={fileInputRef}
                               onChange={handleFileChange}
                        />
                    </div>

                </>
            ) : (
                <section >
                    <div className={styles.wrapper}>
                        <b className={styles.b}>{adRequestFileText}</b>
                    </div>
                    <div className={styles.add} onClick={handleUploadClick}>
                        <img
                            className={styles.scrollDownIcon}
                            alt=""
                            src="/scroll-down@2x.png"
                        />
                    </div>
                </section>
            )}

        </div>
    );

};

export default AdRequestFormContainer;

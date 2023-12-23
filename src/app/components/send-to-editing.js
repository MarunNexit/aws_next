import styles from "./send-to-editing.module.css";

import React, { useState } from 'react';

const SendToEditing = () => {
    const [formData, setFormData] = useState({
        reason: '',
        editor: '',
        additionalMaterial: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Тут ви можете обробити та відправити дані, наприклад, вивести їх у консоль
        console.log('Відправлено на редагування:', formData);
        // Якщо потрібно очистити форму після відправлення, розкоментуйте наступний рядок
        // setFormData({ reason: '', editor: '', additionalMaterial: '' });
    };

    return (
        <div className={styles.frameContainer}>
            <form className={styles.container}>
                <label className={styles.b5} htmlFor="reason">Причина редагування</label>
                <select
                    className={styles.textField}
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                >
                    <option value="">Виберіть причину</option>
                    <option value="editing_review">Рецензування і редагування</option>
                    <option value="add_advertisement">Додавання реклами</option>
                    {/* Додайте інші опції за необхідності */}
                </select>

                <label className={styles.b5} htmlFor="editor">Редактор</label>
                <input
                    type="text"
                    className={styles.textField}
                    id="editor"
                    name="editor"
                    value={formData.editor}
                    onChange={handleInputChange}
                    placeholder="Введіть редактора"
                />

                <label className={styles.b5} htmlFor="additionalMaterial">Додатковий матеріал</label>
                <input
                    type="text"
                    className={styles.textField}
                    id="additionalMaterial"
                    name="additionalMaterial"
                    value={formData.additionalMaterial}
                    onChange={handleInputChange}
                    placeholder="Введіть додатковий матеріал"
                />

                <div className={styles.contactUsWrapper}>
                    <button className={styles.contactUs2} type="button" onClick={handleSubmit}>
                        <b className={styles.b3}>Відправити на редагування</b>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SendToEditing;

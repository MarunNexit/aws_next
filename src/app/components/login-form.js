"use client"
import { useState } from "react";
import styles from "./login-form.module.css";
import {useRouter} from "next/navigation";
import {signIn} from "aws-amplify/auth";
import AlertModal from "@/app/components/AlertMessage";

import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
Amplify.configure(config);

const LoginForm = () => {
  const [frameInputValue, setFrameInputValue] = useState("");
  const [frameInput1Value, setFrameInput1Value] = useState("");

    const router = useRouter();

    const [alertMessage, setAlertMessage] = useState('');
    const [showAllert, setShowAllert] = useState(false);
    const handleAlertClose = () => setShowAllert(false);


    const handleRedirect = () => {
        // Програмована зміна URL
        localStorage.setItem('auth', "true");
        router.push('/');
    };


    async function customSignIn({ username, password }) {
        try {
            console.log(`The username: ${username}`);
            console.log(`The pass: ${password}`);
            try {
                const { isSignedIn, nextStep } = await signIn({ username, password });
                console.log(isSignedIn)
                console.log(nextStep)
                handleRedirect();

            } catch (error) {
                setAlertMessage('error signing in' + error)
                setShowAllert(true);
            }
        } catch (error) {
            setAlertMessage('error signing in' + error)
            setShowAllert(true);
        }
    }


    return (
    <form className={styles.frameParent}>
        <div className={styles.parent}>
        <h3 className={styles.h3}>Увійти</h3>
            <AlertModal show={showAllert} handleClose={handleAlertClose} message={alertMessage} />

      </div>
      <div className={styles.parent}>
        <input
          className={styles.frameChild}
          type="email"
          value={frameInputValue}
          onChange={(e) => setFrameInputValue(e.target.value)}
        />
        <input
          className={styles.frameChild}
          type="password"
          value={frameInput1Value}
          onChange={(e) => setFrameInput1Value(e.target.value)}
        />
      </div>
      <div className={styles.contactUsParent}>
          <button type="button" className={styles.contactUs} onClick={() => customSignIn({ username: frameInputValue, password: frameInput1Value})}>
              <b className={styles.b1}>Увійти</b>
          </button>

        <b className={styles.b2}>{`Зареєструватися як `}</b>
        <b className={styles.b3}>
            <a href="/pages/sign-in-author" className={styles.span2}>{`Автор `}</a>
          <span className={styles.span4}>|</span>
            <a href="/pages/sign-in-advertiser" className={styles.span2}>{` Рекламодавець `}</a>
        </b>
      </div>
    </form>
  );
};

export default LoginForm;

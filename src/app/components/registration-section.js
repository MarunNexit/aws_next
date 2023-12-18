"use client"
import { useState } from "react";
import styles from "./registration-section.module.css";
import {useRouter} from "next/navigation";
import {confirmSignUp, signUp} from "aws-amplify/auth";
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
Amplify.configure(config);

const RegistrationSection = ({ userRole, roleText, registrationType }) => {
  const [frameInputValue, setFrameInputValue] = useState();
  const [frameInput1Value, setFrameInput1Value] = useState();
  const [frameInput2Value, setFrameInput2Value] = useState();
  const [frameInput3Value, setFrameInput3Value] = useState();


  const router = useRouter();

  const [enableConfirm, setEnableConfirm] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAllert, setShowAllert] = useState(false);
  const handleAlertClose = () => setShowAllert(false);


  const handleRedirect = () => {
    // Програмована зміна URL
    router.push('/pages/login-page');
  };

  async function handleSignUpConfirmation({ username, confirmationCode }) {
    try {

      console.log(username)
      console.log(confirmationCode)

      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode
      });
      handleRedirect();
    } catch (error) {
      console.log('error confirming sign up', error);
    }
  }


  async function handleSignUp({ username, password }) {
    try {
      const { isSignUpComplete, userId, nextStep } = await signUp({
        username,
        password,
        options: {
          // optional
          autoSignIn: true // or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
        }
      });
      setEnableConfirm(true);
      console.log(isSignUpComplete)
      console.log(nextStep)
      console.log(userId);
    } catch (error) {
      console.log('error signing up:', error);
      if (error.code === 'UsernameExistsException') {
        setAlertMessage('Username already exists. Please choose a different username')
        setShowAllert(true);
        // Handle the case where the username already exists
      } else {
        setAlertMessage('Unexpected error:' + error)
        setShowAllert(true);
        // Handle other errors
      }
    }
  }


  return (
      <>
      {enableConfirm ? (
          // Show this when enableConfirm is true
          <section className={styles.frameParent}>
            <form className={styles.frameGroup}>
              <div className={styles.parent}>
                <h3 className={styles.h3}>
                  <span className={styles.span}>Код підтвердження</span>
                </h3>
              </div>
              <div className={styles.parent}>
                <input
                    className={styles.frameChild}
                    type="text"
                    value={frameInput3Value}
                    onChange={(event) => setFrameInput3Value(event.target.value)}
                />
              </div>
              <div className={styles.contactUsParent}>
                <button className={styles.contactUs} type="button" onClick={() => handleSignUpConfirmation({ username: frameInputValue, confirmationCode: frameInput3Value })}>
                  <b className={styles.b1}>Зареєструватись</b>
                </button>
              </div>
            </form>
            <img className={styles.containerIcon} alt="" src="/container12@2x.png" />
          </section>
      ) : (
          <section className={styles.frameParent}>
            <form className={styles.frameGroup}>
              <div className={styles.parent}>
                <h3 className={styles.h3}>
                  <span className={styles.span}>Зареєструватися як</span>
                  <span className={styles.span1}>{` `}</span>
                  <span className={styles.span2}>{userRole}</span>
                </h3>
                <b className={styles.b}>
                  <span className={styles.span3}>Зареєструватися як</span>
                  <span className={styles.span4}>{`  `}</span>
                  <a href={"/pages/sign-in-" + (roleText === "Автор" ? "author" : "advertiser")} className={styles.span2}>{roleText}</a>
                </b>
              </div>
              <div className={styles.parent}>
                <input
                    className={styles.frameChild}
                    type="text"
                    value={frameInputValue}
                    onChange={(event) => setFrameInputValue(event.target.value)}
                />
                <input
                    className={styles.frameChild}
                    type="password"
                    value={frameInput1Value}
                    onChange={(event) => setFrameInput1Value(event.target.value)}
                />
                <input
                    className={styles.frameChild}
                    type="password"
                    value={frameInput2Value}
                    onChange={(event) => setFrameInput2Value(event.target.value)}
                />
              </div>
              <div className={styles.contactUsParent}>
                <button className={styles.contactUs} type="button"   onClick={() => handleSignUp({ username: frameInputValue, password: frameInput2Value })}>
                  <b className={styles.b1}>Зареєструватись</b>
                </button>
                <a href="/pages/login-page" className={styles.b2}>{registrationType}</a>
              </div>
            </form>
            <img className={styles.containerIcon} alt="" src="/container12@2x.png" />
          </section>
      )}
      </>
  );
}



export default RegistrationSection;

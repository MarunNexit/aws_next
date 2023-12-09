"use client"
// pages/page.js
import { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import { getCurrentUser } from 'aws-amplify/auth';
import {parseAndValidateFlightRouterState} from "next/dist/server/app-render/parse-and-validate-flight-router-state";
import { signUp } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';
Amplify.configure(config);
import { confirmSignUp } from 'aws-amplify/auth';
import AlertModal from "@/app/components/AlertMessage";
import { useRouter } from 'next/navigation';



const SignUpUser = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmCode, setConfirmCode] = useState('');
    const [enableConfirm, setEnableConfirm] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [showAllert, setShowAllert] = useState(false);
    const handleAlertClose = () => setShowAllert(false);


    const handleRedirect = () => {
        // Програмована зміна URL
        router.push('/pages/login');
    };

    async function handleSignUpConfirmation({ username, confirmationCode }) {
        try {
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
        <div>
            <button type="button" onClick={() => handleRedirect()}>
                0ooo
            </button>
            <h1>Зареєструватися</h1>
            {enableConfirm ? (
                // Show this when enableConfirm is true
                <form>
                    <h2>Підтвердження акаунту</h2>
                    <label>
                        Confirm code:
                        <input type="password" value={confirmCode} onChange={(e) => setConfirmCode(e.target.value)} />
                    </label>
                    <br />
                    <button type="button" onClick={() => handleSignUpConfirmation({ username: email, confirmationCode: confirmCode })}>
                        Confirm
                    </button>
                </form>
            ) : (
                // Show this when enableConfirm is false
                <form>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <br />
                    <button type="button" onClick={() => handleSignUp({ username: email, password, email, phone_number: 'asdasd' })}>
                        Sign Up
                    </button>
                </form>
            )}
        </div>
    );
};

export default SignUpUser;
"use client"
// pages/page.js
import { useState } from 'react';
import { signIn } from 'aws-amplify/auth';
import {parseAndValidateFlightRouterState} from "next/dist/server/app-render/parse-and-validate-flight-router-state";
import { Amplify } from 'aws-amplify';
import AlertModal from '../../components/AlertMessage';
import config from '../../../amplifyconfiguration.json';
import {useRouter} from "next/navigation";
import {CurrentAuthenticatedUser} from "@/app/functions/CheckUserAuth";
Amplify.configure(config);

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAllert, setShowAllert] = useState(false);
    const handleAlertClose = () => setShowAllert(false);


    const handleRedirect = () => {
        // Програмована зміна URL
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
        <div>
            <h1>Login Page</h1>
            <AlertModal show={showAllert} handleClose={handleAlertClose} message={alertMessage} />
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
                <button type="button" onClick={() => customSignIn({ username: email, password })}>
                    Login
                </button>
                <button type="button" onClick={() => CurrentAuthenticatedUser()}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
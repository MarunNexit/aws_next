"use client"

// pages/page.js
import { signOut } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';
Amplify.configure(config);
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import {useState} from "react";



const SignOutUser = () => {
    const router = useRouter();
    const [alertMessage, setAlertMessage] = useState('');
    const [showAllert, setShowAllert] = useState(false);
    const handleAlertClose = () => setShowAllert(false);

    const handleRedirect = () => {
        // Програмована зміна URL
        localStorage.setItem('auth', "false");
        router.push('/');
    };


    async function handleSignOut() {
        try {
            await signOut();
            handleRedirect();
        } catch (error) {
            setAlertMessage('error signing in' + error)
            setShowAllert(true);
        }
    }

    return (
        <div>
            <h1>SignOUT Page</h1>
            <form>
                <button type="button" onClick={() => handleSignOut()}>
                    Вийти
                </button>
            </form>
        </div>
    );
};

export default SignOutUser;
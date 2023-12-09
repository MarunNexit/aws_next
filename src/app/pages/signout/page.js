"use client"

// pages/page.js
import { signOut } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';
Amplify.configure(config);
import { getCurrentUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';



const SignOutUser = () => {
    const router = useRouter();



    const handleRedirect = () => {
        // Програмована зміна URL
        router.push('/');
    };

    async function currentAuthenticatedUser() {
        try {
            const { username, userId, signInDetails } = await getCurrentUser();
            console.log(`The username: ${username}`);
            console.log(`The userId: ${userId}`);
            console.log(`The signInDetails: ${signInDetails}`);
            handleRedirect();
        } catch (err) {
            console.log(err);
        }
    }

    async function handleSignOut() {
        try {
            await currentAuthenticatedUser();
            await signOut();
        } catch (error) {
            console.log('error signing out: ', error);
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
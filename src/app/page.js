'use client'
import { useEffect, useState } from "react";
import { CurrentAuthenticatedUser } from "@/app/functions/CheckUserAuth";
import { getUserRole } from "@/app/functions/getUserRole";
import {useRouter} from "next/navigation";

import { Amplify } from 'aws-amplify';
import config from '../amplifyconfiguration.json';
Amplify.configure(config);



export default function Home() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userID, setUserID] = useState("");
    const router = useRouter();

    const handleRedirectAUTH = (role) => {
        localStorage.setItem('role', role);
        const ref = '/pages/' + role +  "/profile-" + role;
        router.push(ref);
    };

    const handleRedirect = () => {
        // Програмована зміна URL
        router.push('pages/home');
    };


    useEffect(() => {

        const auth = localStorage.getItem('auth');

        const checkAuthentication = async () => {
            try {
                const user = await CurrentAuthenticatedUser();
                console.log(`The user: ${user.username}`);
                if(user.username !== null){
                    setUserID(user.username);
                }
                else{
                    handleRedirect();
                }
            } catch (error) {
                console.error('Error checking authentication:', error);
                setIsAuthenticated(false);
                handleRedirect();
            }
        };
        if(!isAuthenticated){
            if(auth === "true"){
                checkAuthentication();
            }
            else{
                handleRedirect();
            }
        }
    }, []);

    useEffect(() => {
        const fetchUserRole = async () => {
            try {
                console.log(userID)
                const role = await getUserRole(userID);
                if(role != null){
                    setIsAuthenticated(true);
                    handleRedirectAUTH(role);
                }

                // Perform actions based on the user role
            } catch (error) {
                console.error('Error fetching user role:', error);
            }
        };

        if (userID) {
            fetchUserRole();
        }

    }, [userID]);

    return (
        <>
            {isAuthenticated ? (
                <>
                    {/* Content to display when authenticated */}
                    <p>Welcome, Waiting ....</p>
                    {/* Other authenticated content */}
                </>
            ) : (
                <>
                    {/* Content to display when not authenticated */}
                    <p>Waiting ....</p>
                    {/* Other non-authenticated content */}
                </>
            )}
        </>
    );
}

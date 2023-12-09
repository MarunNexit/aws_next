"use client"
import {getUserRole} from '../../functions/getUserRole'
import {GetAddvertisement} from '../../functions/GetAddvertisement'
import { Amplify } from 'aws-amplify';
import config from '../../../amplifyconfiguration.json';
Amplify.configure(config);
import { useRouter } from 'next/navigation';


const Profile = () => {
    const router = useRouter();

    const handleRedirect = () => {
        // Програмована зміна URL
        router.push('/');
    };


    return (
        <div>
            <form>
                <button type="button" onClick={() => getUserRole()}>
                    Користувачі
                </button>
                <button type="button" onClick={() => GetAddvertisement()}>
                    Реклама
                </button>
            </form>
        </div>
    );
};

export default Profile;

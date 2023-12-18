import {CurrentAuthenticatedUser} from "@/app/functions/CheckUserAuth";
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
Amplify.configure(config);

export const GetUserPass = async () => {
    try {
        const user = await CurrentAuthenticatedUser();
        console.log(`The user: ${user.username}`);
        if(user.username !== null){
            return user.username;
        }
    } catch (error) {
        console.error('Error checking authentication:', error);
    }
};




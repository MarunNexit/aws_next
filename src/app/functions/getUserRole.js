import { get } from 'aws-amplify/api';
import {getUserInfo} from "@/app/functions/GetUserInfo";

export async function getUserRole(pass) {
    try {
        // Далі ви можете використовувати 'data' для операцій
        let role = "";

        const item = getUserInfo()
        if(item.AuthorID !== null){
            role = "author";
        }
        else if(item.EditorID !== null){
            role = "editor";
        }
        else if(item.ManagerID !== null){
            role = "manager";
        }
        else{
            role = "advertiser";
        }
        console.log('Role: ', role);
        return role;
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
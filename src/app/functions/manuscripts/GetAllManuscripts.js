import {get} from 'aws-amplify/api';
import {getUserInfo} from "@/app/functions/GetUserInfo";

export async function GetAllManuscripts() {
    try {
        const restOperation = get({
            apiName: 'userInfoApi',
            path: '/manuscripts'
        });

        const { body } = await restOperation.response;
        const data = JSON.parse(await body.text());
        return data;
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}

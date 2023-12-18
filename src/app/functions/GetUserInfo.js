import {get} from 'aws-amplify/api';
import {GetUserPass} from "@/app/functions/GetUserPass";

export async function getUserInfo() {
    try {
        const restOperation = get({
            apiName: 'userInfoApi',
            path: '/userinfo'
        });

        const { body } = await restOperation.response;
        const data = JSON.parse(await body.text());
        const userID = await GetUserPass();

        // Далі ви можете використовувати 'data' для операцій
        const item = data.find(item => item.Password === userID);

        return item;
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}

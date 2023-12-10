import { get } from 'aws-amplify/api';

export async function GetAllUsersInfo() {
    try {
        const restOperation = get({
            apiName: 'userInfoApi',
            path: '/userinfo'
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
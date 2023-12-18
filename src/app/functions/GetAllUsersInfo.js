import { get } from 'aws-amplify/api';

export async function GetAllUsersInfo() {
    try {
        const restOperation = get({
            apiName: 'userInfoApi',
            path: '/userinfo'
        });

        const { body } = await restOperation.response;
        const dataUser = JSON.parse(await body.text());

        return dataUser;
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
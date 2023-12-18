import { get } from 'aws-amplify/api';

export async function GetAddvertisement() {
    try {
        const restOperation = get({
            apiName: 'userInfoApi',
            path: '/advertisement'
        });

        const { body } = await restOperation.response;
        const data = JSON.parse(await body.text());
        // Далі ви можете використовувати 'data' для операцій

        console.log('GET call succeeded: ', data);
        return data;

    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
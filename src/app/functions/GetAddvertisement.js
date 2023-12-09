import { get } from 'aws-amplify/api';

export async function GetAddvertisement() {
    try {
        const restOperation = get({
            apiName: 'https://od0aozpthe.execute-api.eu-central-1.amazonaws.com/dev',
            path: '/advertisement'
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}
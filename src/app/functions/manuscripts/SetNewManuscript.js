import { post } from 'aws-amplify/api';

export async function SetNewManuscript(requestBody) {
    try {
        console.log('Body', requestBody);

        const response = await post( {
            apiName: 'userInfoApi',
            path: '/manuscripts',
            options: {
                body: {
                    AuthorId: requestBody.AuthorId,
                    EditionType: requestBody.EditionType,
                    EditionTitle: requestBody.EditionTitle,
                    EditionDescription: requestBody.EditionDescription,
                    LinkForFile: requestBody.LinkForFile,
                    NumberPages: requestBody.NumberPages,
                    FormatPages: requestBody.FormatPages,
                    Status: requestBody.Status
                }
            }
        });

        console.log('Response:', response);
        return true;

    } catch (error) {
        // Handle network or other errors
        console.error('Error:', error.message);
        return false
    }
}

import {fetchAuthSession, getCurrentUser} from "aws-amplify/auth";

export async function CurrentAuthenticatedUser() {
    try {
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The email: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
        await CurrentSession()
    } catch (err) {
        console.log(err);
    }
}

export async function CurrentSession() {
    try {
        const { accessToken, idToken } = (await fetchAuthSession()).tokens ?? {};
        console.log(accessToken, idToken)
    } catch (err) {
        console.log(err);
    }
}

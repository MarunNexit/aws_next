import {fetchAuthSession, getCurrentUser} from "aws-amplify/auth";

export async function CurrentAuthenticatedUser() {
    try {
        await CurrentSession();
        const { username, userId, signInDetails } = await getCurrentUser();
        console.log(`The email: ${username}`);
        console.log(`The userId: ${userId}`);
        console.log(`The signInDetails: ${signInDetails}`);
        return { username, userId, signInDetails }
    } catch (err) {
        console.log(err);
        return { username: null, userId: null, signInDetails: null };
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

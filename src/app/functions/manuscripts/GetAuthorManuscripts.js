import {getUserInfo} from "@/app/functions/GetUserInfo";
import {GetAllManuscripts} from "@/app/functions/manuscripts/GetAllManuscripts";

export async function getAuthorManuscripts() {
    try {
        const userInfo = await getUserInfo();
        const data = await GetAllManuscripts();

        console.log(data)
        console.log(userInfo)

        // Далі ви можете використовувати 'data' для операцій
        const a = data.filter(item => item.AuthorId === userInfo.Id);
        console.log(a)
        return a
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}

import {GetAllManuscripts} from "@/app/functions/manuscripts/GetAllManuscripts";

export async function GetAllManuscriptsStatus(status) {
    try {
        const data = await GetAllManuscripts();

        console.log(data)

        const a = data.filter(item => item.Status === status);
        console.log(a)
        return a
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}

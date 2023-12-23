
import {getAuthorManuscripts} from "@/app/functions/manuscripts/GetAuthorManuscripts";

export async function GetManuscriptById(id) {
    try {
        const manuscripts = await getAuthorManuscripts();

        console.log(manuscripts)
        console.log(id)

        const manuscript = manuscripts.find(item => item.Id === parseInt(id, 10));
        console.log(manuscript)

        return manuscript
    } catch (error) {
        console.log('GET call failed: ', error);
    }
}

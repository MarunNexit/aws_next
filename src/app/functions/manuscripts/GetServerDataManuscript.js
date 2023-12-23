import {GetManuscriptById} from "@/app/functions/manuscripts/GetManuscriptById";

export async function getServerSideProps(id) {
    // Your server-side logic to fetch data here
    const data = GetManuscriptById(id)/* Fetch your data from an API, database, etc. */;

    return data
}
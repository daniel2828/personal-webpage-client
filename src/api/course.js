import { BASE_PATH, apiVersion } from "./config";

export function getCoursesApi() { 
    const url = `${BASE_PATH}/${apiVersion}/get-courses`;

    return fetch(url)
        .then(response => {
            return response.json();
        })
        .then(result => {
            return result;
        })
        .catch(err => { 
            return err;
        })
}
export function getCourseDataUdemyApi(id) { 
    const baseUrl = `https://www.udemy.com/api-2.0/courses/238934/`;
    const courseParams = `?fields[course]=title,headline,url,price,image_480x270`;
    const url = baseUrl + courseParams;

    return fetch(url)
        .then(async response => { 
            return {code : response.status, data: await response.json()}
        })
        .then(result => { 
            return result;
        })
        .catch(err => { 
            return err;
        })
}
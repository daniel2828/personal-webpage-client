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
export function deleteCourseApi(token, id) { 
    const url = `${BASE_PATH}/${apiVersion}/delete-course/${id}`;
    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    }
    return fetch(url, params).then(response => { 
        return response.json();
    }).then(result => { 
        return result;
    }
    ).catch(err => {
        console.log(err)
        return err;
    })
}
export function addCourseApi(token, course) { 
    const url = `${BASE_PATH}/${apiVersion}/add-course`;
    const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify(course)
    };
    return fetch(url, params)
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
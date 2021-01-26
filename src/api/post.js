import { BASE_PATH, apiVersion } from "./config";

export function getPostsApi(limit, page) { 
    const url = `${BASE_PATH}/${apiVersion}/get-posts?page=${page}&limit=${limit}`;
    return fetch(url).
        then(response => { 
            return response.json();
        })
        .then(result => { 
            return result;
        })
        .catch(err => { 
            return err;
        })
}
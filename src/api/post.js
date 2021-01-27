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
export function deletePostApi(token, id){ 
    const url = `${BASE_PATH}/${apiVersion}/delete-post/${id}`;
    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization : token
        }
    }
    return fetch(url, params).
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
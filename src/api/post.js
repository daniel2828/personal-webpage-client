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

export function addPostApi(token, post) {
  const url = `${BASE_PATH}/${apiVersion}/add-post`;

  const params = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(post)
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
    });
}

export function updatePostApi(token, id, data) {
  const url = `${BASE_PATH}/${apiVersion}/update-post/${id}`;

  const params = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(data)
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
    });
}

export function getPostApi(urlPost) {
  const url = `${BASE_PATH}/${apiVersion}/get-post/${urlPost}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    })
    .catch(err => {
      return err;
    });
}
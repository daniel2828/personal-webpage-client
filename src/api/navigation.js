
import { BASE_PATH, apiVersion } from "./config";

export function getNavigationApi() { 

    const url = `${BASE_PATH}/${apiVersion}/get-navigations`;

    return fetch(url).then(response => { 
        console.log("Res" , response);
        return response.json();
    }).then(result => { 
        return result;
    }).catch(err => { 
        return err.message;
    })
}

export function updateNavigationApi(token, navigationId,data) { 
    const url = `${BASE_PATH}/${apiVersion}/update-navigation/${navigationId}`;
    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization : token
        },
        body: JSON.stringify(data)
    }
    return fetch(url, params).then(response => { 
        return response.json();
    }).then(result => { 
        return result.message;
    }).catch(err => { 
        return err;
    })
}

export function activateNavigationApi(token, navigationId, status) {
    const url = `${BASE_PATH}/${apiVersion}/activate-navigation/${navigationId}`;
    const params = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
        body: JSON.stringify({ active: status })
    };
    return fetch(url, params).then(response => {
        return response.json();
    }
    ).then(result => {
        return result.message;
    }).catch(err => { 
        return err;
    })
}

export function addNavigationApi(token, navigation) { 
     const url = `${BASE_PATH}/${apiVersion}/add-navigation`;
      const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
          body: JSON.stringify(navigation)
    };
    return fetch(url, params).then(response => { 
        return response.json();
    }).then(result => { 
        return result.message;
    }).catch(err => { 
        console.log(err);
    })
}

export function deleteNavigationApi(token, navigationID) { 
    const url = `${BASE_PATH}/${apiVersion}/delete-navigation/${navigationID}`;
    const params = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        }
    };
    return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}
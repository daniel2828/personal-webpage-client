import { Result } from "antd";
import { BASE_PATH, apiVersion } from "./config";

export function getMenuApi() { 

    const url = `${BASE_PATH}/${apiVersion}/get-menus`;

    return fetch(url).then(response => { 
        return response.json();
    }).then(result => { 
        return result;
    }).catch(err => { 
        return err.message;
    })
}

export function updateMenuApi(token, menuId,data) { 
    const url = `${BASE_PATH}/${apiVersion}/update-menu/${menuId}`;
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

export function activateMenuApi(token, menuId, status) {
    const url = `${BASE_PATH}/${apiVersion}/activate-menu/${menuId}`;
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

export function addMenuApi(token, menu) { 
     const url = `${BASE_PATH}/${apiVersion}/add-menu`;
      const params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: token
        },
          body: JSON.stringify(menu)
    };
    return fetch(url, params).then(response => { 
        return response.json();
    }).then(result => { 
        return result.message;
    }).catch(err => { 
        console.log(err);
    })
}
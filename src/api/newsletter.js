import { BASE_PATH, apiVersion } from "./config";

export function suscribeNewsletterApi(email) {
    const url = `${BASE_PATH}/${apiVersion}/suscribe-newsletter/${email.toLowerCase()}`;

    const params = {
        method: "POST"
    };
    return fetch(url, params)
        .then(response => {
           console.log(response);
            return response.json();
        })
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(err => { 
            return err;
        })
}

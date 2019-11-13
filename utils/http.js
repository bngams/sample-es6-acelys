export class Http {

    static get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // request ok
                    resolve(xhr.response);
                } else if (xhr.readyState === 4) {
                    // request bad
                    reject(xhr.response);
                }
            }
            xhr.send();
        });

    }

    static getWithCallback(url, callbackSuccess, callbackError) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // request ok
                callbackSuccess(xhr.responseText);
            } else if (xhr.readyState === 4) {
                // request bad
                callbackError(xhr.responseText);
            }
        }
        xhr.send();
    }
}
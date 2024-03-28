// Creating custom API with Fetch API
export class BrainHttp {
    constructor(){

    }

    // Get Request
    static get(url){
        return new Promise((resolve , reject) => {
            fetch(url).then((res) => {
                res.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    // Post Request
    static post(url, data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                res.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    // Put Request
    static put(url, data){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((res) => {
                res.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }

    // Delete Request
    static delete(url){
        return new Promise((resolve,reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => {
                res.json().then((data) => {
                    resolve(data);
                }).catch((err) => {
                    reject(err);
                });
            });
        });
    }
}
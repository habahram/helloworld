let backendAddress = 'http://localhost:4002';

let apiAccess = {
    addCustomer: (name, email, password) => {
         return fetch(`${backendAddress}/register`, {
            method: 'Post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password}) 
         })
         .then(x => x.json())
         .then(x => {
             console.log(x);
             return x;
         });
     },
     login: (email, password) => {
        return fetch(`${backendAddress}/login`, {
           method: 'Post',
           credentials: "include",
           headers: {
               'Content-Type': 'application/json',
               "Access-Control-Allow-Credentials": true
           },
           body: JSON.stringify({email, password}) 
        })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x;
        });
    },
    getFlowers: () => {
        return fetch(`${backendAddress}/flowers`, {
            method: 'Get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            }
         })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x.result;
        });
    },
    getQuiz: (name) => {
        return fetch(`${backendAddress}/quiz/${name}`, {
            method: 'Get',
            credentials: "include",
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Credentials": true
            }
         })
        .then(x => x.json())
        .then(x => {
            console.log(x);
            return x.result;
        });
    }
}

export default apiAccess;
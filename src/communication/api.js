let apiHost = "https://helloworldserverside.herokuapp.com";

let getPlaces = () => {
    return fetch(apiHost + '/places')
    .then(response => response.json());
}

let add = (a, b) => {
    return fetch(apiHost + `/add/${a}/${b}`)
    .then(response => response.json());
}

let addPlace = (place) => {
    return fetch(apiHost + '/place', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let api = {
    getPlaces: getPlaces,
    addPlace: addPlace
};

export default api;
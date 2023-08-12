const getPokemon = (resource) => {

    return new Promise((resolve,reject) => {
        const request = new XMLHttpRequest();

        // check https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
        // 4 is where data is taken from API
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200){
    
                //JSON demo
                const data = JSON.parse(request.responseText);
    
                // using resolve
                resolve(data);

            } else if (request.readyState === 4) {
    
                // using reject
                reject('could not fetch data');
            }
        })
    
        // setting up request
        request.open('GET', resource);
        // send request
        request.send()
    })


};


getPokemon('pokemons/ash.json')
.then((data) => {console.log("promise resolved:",data)})
.catch((err) => {console.log("promise rejected:",err)});
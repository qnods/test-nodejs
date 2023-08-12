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

const resolve_func = (data) =>{
    console.log(data);
};

const resolve_func_stack_1 = (data) =>{
    console.log(data);
    return getPokemon('pokemons/ash.json');
};

const resolve_func_stack_2 = (data) =>{
    console.log(data);
    return getPokemon('pokemons/gary.json');
};

const reject_func = (err) =>{
    console.log(err);
};

getPokemon('pokemons/oak.json')
.then(resolve_func_stack_1)
.then(resolve_func_stack_2)
.then(resolve_func)
.catch(reject_func);
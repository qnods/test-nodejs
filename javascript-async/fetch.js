// fetch api

// resolve func
// response.json contain promise
const resolve_func = (response) =>{
    console.log('resolved: ',response);
    return response.json()
}

const get_data = (data) =>{
    console.log(data);
}

// reject func
const reject_func = (err) =>{
    console.log('rejected:',err);
}

fetch('./pokemons/oak.json')
.then(resolve_func)
.then(get_data)
.catch(reject_func);
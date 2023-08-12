const getPokemon = (resource, subfunction) => {
    const request = new XMLHttpRequest();

    // check https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
    // 4 is where data is taken from API
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200){

            //JSON demo
            const data = JSON.parse(request.responseText);


            // using subfunction
            subfunction(undefined, data);
        } else if (request.readyState === 4) {

            // using subfunction
            subfunction('could not fetch data','undefined');
        }
    })

    // setting up request
    request.open('GET', resource);
    // send request
    request.send()

};

// subfunction
const checker = (err, data) => {
    console.log("sub_function executed")
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
};
// demo async

console.log(1);
console.log(2);
getPokemon("pokemons/ash.json",checker);
console.log(3);
console.log(4);


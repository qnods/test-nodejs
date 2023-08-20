// to avoid code blocker
// async is to define the entire function as asynchronous function
// await is used within async function to mark what that particular var is waiting for
const getPokemon = async (path) => {
    const response  = await fetch(path);

    if(response.status !== 200){
        throw new Error('wrong path');

    }

    const data = await response.json();
    return data

};

// // test async
// console.log(1)
// console.log(2)
getPokemon('pokemons/ash.json')
.then(data=>console.log('resolved : ',data))
.catch(err=>console.log('rejected : ',err.message));
// console.log(3)
// console.log(4)

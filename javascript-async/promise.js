// promises
// this is used to get function in order, by default JavaScript do it as async
const getSomething = () => {

    // promise can be resolve (i.e. get the data) or reject (i.e. get error)
    // resolve and reject parameter are automatically created but unseen
    return new Promise((resolve, reject) =>{
        // comment / uncomment resolve reject below to activate either one
        resolve("some data");
        // reject("some error");
    });

}
// promises application
// promises will follow the order based on then
const good_promise = (data) => {
    console.log(data);
}

const bad_promise = (err) => {
    console.log(err);
}
// first way of writing
// getSomething().then(good_promise, bad_promise);

// second way of writing
// catch will refer to reject parameter automatically
getSomething().then(good_promise).catch(bad_promise)
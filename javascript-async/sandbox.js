const request = new XMLHttpRequest();

// check https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState 
// 4 is where data is taken from API
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    } else if (request.readyState === 4) {
        console.log("unable to fetch data")
    }
})

// setting up request
request.open('GET','https://jsonplaceholder.typicode.com/todos/');


// send request
request.send()



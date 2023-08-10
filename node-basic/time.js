// run console log after 3 sec

setTimeout(() => {
   console.log("in the timeout");
   clearInterval(int); // terminate interval function below
}, 3000);


// run console log every 1 second
const int = setInterval(() => {
    console.log("interval running")
}, 1000);
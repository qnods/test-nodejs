//

setTimeout(() => {
   console.log("in the timeout");
   clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log("interval running")
}, 1000);
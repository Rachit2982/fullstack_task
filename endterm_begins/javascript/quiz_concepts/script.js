// to create a timer for 15 minutes using setinterval and settimeout and display the passing time in the console every second, you can use the following code:
let totalTime = 15 *60; 
let timeLeft = totalTime;
const timer = setInterval(() => {
    timeLeft--;
    console.log(`Time left: ${timeLeft} seconds`);
    
    if (timeLeft <= 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);
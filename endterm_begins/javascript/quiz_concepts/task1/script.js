const questionsList = [
  "What is the time complexity of accessing an element in an array?",
  "How do you find the maximum element in an array?",
  "How do you reverse an array in-place?",
  "What is the Two Sum problem and how do you solve it using a hash map?",
  "How do you remove duplicate elements from a sorted array?",
  "What is Kadane's algorithm used for?",
  "How do you merge two sorted arrays into a single sorted array?"
];
let timeLeft = 15 * 60+1; // 15 minutes in seconds
let timer;
setInterval(() => {
    timeLeft--;
    console.log(`Time left: ${timeLeft} seconds`);
    document.getElementById("time").innerHTML = `Time left: ${timeLeft} seconds`;
    if (timeLeft <= 0) {
        clearInterval(timer);
        console.log("Time's up!");
    }
}, 1000);
let count=0;
function next(){

document.getElementById("question").innerHTML=questionsList[(()=>{count++; return count;})()];
if(count>=questionsList.length){
    document.getElementById("question").innerHTML="Quiz Completed!";
}
}
  
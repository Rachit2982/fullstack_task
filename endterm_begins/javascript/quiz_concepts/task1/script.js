const questionsList = [
  "What is the time complexity of accessing an element in an array?",
  "How do you find the maximum element in an array?",
  "How do you reverse an array in-place?",
  "What is the Two Sum problem and how do you solve it using a hash map?",
  "How do you remove duplicate elements from a sorted array?",
  "What is Kadane's algorithm used for?",
  "How do you merge two sorted arrays into a single sorted array?"
];
function next(){
document.getElementById("question").innerHTML=questionsList[Math.floor(Math.random() * questionsList.length)];
}
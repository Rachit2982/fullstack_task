// let a = "153"; // Example input, you can change this value to test other numbers
function isArmstrongNumber(a) {
    const b = a.length;
    let sum=0;
    for(let i=0; i<b; i++){
        sum += Math.pow(a[i], b);
    }
    if(sum == a){
        console.log(a + " is an Armstrong number.");
    }else{
        console.log(a + " is not an Armstrong number.");
    }
}
function checkArmstrong() {
    let a=prompt("Enter a number to check if it is an Armstrong number or not: "); // Example input, you can change this value to test other numbers
    isArmstrongNumber(a);
}
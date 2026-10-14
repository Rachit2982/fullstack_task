// let a = "153"; // Example input, you can change this value to test other numbers
function isArmstrongNumber(a) {
    const b = a.length;
    let sum=0;
    let para=document.createElement("p");
    for(let i=0; i<b; i++){
        sum += Math.pow(a[i], b);
    }
    if(sum == a){
        para.textContent=a + " is an Armstrong number.";
    }else{
        para.textContent=a + " is not an Armstrong number.";
    } 
    document.getElementsByTagName("body")[0].appendChild(para);
}
function checkArmstrong() {
    let a=prompt("Enter a number to check if it is an Armstrong number or not: ");
    isArmstrongNumber(a);
}
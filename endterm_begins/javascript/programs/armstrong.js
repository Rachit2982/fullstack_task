let a=prompt("Enter a number to check if it is an Armstrong number or not: ");
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
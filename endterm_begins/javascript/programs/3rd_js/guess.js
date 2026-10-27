const m=Math.floor(Math.random() * 10) + 1;
console.log(m);

let l=7;
while(l-->0){
    var k=prompt("Enter a Number");
    if(k==m){
        document.getElementById("status").innerHTML="You guessed it right";
        break;
    }   
    else if(l==1){
        document.getElementById("status").innerHTML="You lost the game";
    }
    
}

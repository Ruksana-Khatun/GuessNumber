const max= prompt("enter the max number!");

const random= Math.floor(Math.random()*max)+1;
let guess =prompt("guess the random number");

while(true){
   if(guess=="quit"){
      console.log('quit');
      break;
   }
   if(guess==random){
    guess=prompt("congralution you are gussing corect the number was ",random)
      console.log(" you  are right congratulation! the   random number was",random);
      break;

   }else if(guess < random){
      guess=prompt(" hint: you was   guessing number to small  number plase try again")
   }

   else{
      guess=prompt(" hint: your guess number was to large.please try again")
   }
   
  
}


let n = prompt("write your number:")
n=parseInt(n);
for(let i = n; i<=n*10;i=i+n){
    console.log(i);
    n=prompt("your gurd is",n)
}



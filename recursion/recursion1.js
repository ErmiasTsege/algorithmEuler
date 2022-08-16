// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.
 sum=0

function sumNums(num){
     sum=sum+num;
    // for (i=num;i>1;i--){
    //   sum+=i;

    // }
  if(num>0)  {sumNums(num-1)}

 return sum;
}

console.log(sumNums(7)); // => 6 (3 + 2 + 1)

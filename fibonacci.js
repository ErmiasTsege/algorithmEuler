//program to generate fibonacci series up to n terms

// take input from the user
const number = 4000000;
let n1 = 1, n2 = 1, temp;
 sum=0
console.log('Fibonacci Series:');
function fib(number){
    for (let i = 1; i <= number; i++) {
        // console.log(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        if (temp%2==0 && temp<4000000)
        
        console.log(temp)
        sum+=temp

    }
    return sum
    
}
 

console.log(fib (400))
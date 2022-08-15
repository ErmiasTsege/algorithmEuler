//program to generate fibonacci series up to n terms

// take input from the user
const number = 10;
let n1 = 0, n2 = 1, temp;

console.log('Fibonacci Series:');
function fib(number){
    for (let i = 1; i <= number; i++) {
        // console.log(n1);
        temp = n1 + n2;
        n1 = n2;
        n2 = temp;
        if (n1%2==0)
        console.log(n1)
    }
    
    
}
 

fib (10)
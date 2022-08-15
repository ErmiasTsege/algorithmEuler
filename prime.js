function prime_factors(n){

    //"""Returns all the prime factors of a positive integer"""
    
    factors=[]
    d = 2
    while (n > 1){
            if (n % d == 0){
            factors.push(d)
            n /= d
         d = d + 1}
       
    }
       

    return factors

}


pfs = prime_factors(10)
largest_prime_factor = max(pfs)// The largest element in the prime factor list
console.log(largest_prime_factor)

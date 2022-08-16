

 
function prime_factors(n){

  //  """Returns all the prime factors of a positive integer"""
  const factors = []
  d=2


  while(n > 1 ) {
 
    while (n % d == 0) {
        factors.push(d)
        n /= d    
    }
        
    d = d + 1
    
      }
      return factors

          
  }
 

pfs = prime_factors(100)
largest_prime_factor = Math.max(...pfs)  //# The largest element in the prime factor list
console.log(largest_prime_factor)
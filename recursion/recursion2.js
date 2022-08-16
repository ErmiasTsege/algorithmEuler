// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.

count=0
function countVowels(str)

 {       
     if( str[str.length-1].includes('a')||str[str.length-1].includes('e')||str[str.length-1].includes('i')||str[str.length-1].includes('o')||str[str.length-1].includes('u')==true)
      { count++  }
      i=str.length-1;
      str=str.slice(0, str.length - 1);

   if(i>0){countVowels(str)}
    return count
  }
console.log(countVowels("Four score and seven years")); // => 9

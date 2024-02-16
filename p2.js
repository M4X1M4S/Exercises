/* Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive. */ 
  
  
  function isPalindrome(str){
    str=str.toLowerCase();
    strArr=str.split(' ').join('');
    let len=strArr.length;
    let j=0;
    if(len % 2===0){
        let pt=len/2;
      if(strArr[pt]===str[pt-1]){
        console.log('Plaindrome')
      }
    }
    else{
        for(i=0;i<len-1;i++){
            if(strArr[i]!=strArr[len-1-i]){
                j++;
            }
        }
        if(j>0){
            console.log('Not Palindrome')

        }
        else
        console.log('Palindrome')
    }

  } 

  isPalindrome('Race car')
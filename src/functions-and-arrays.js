// Iteration #1: Find the maximum
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2){
    return num1 
    
  }
    else  {
      return (num2)
    }

   
    }
  
   return maxOfTwoNumbers(8, 9)



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(words) {
  if (words.length === 0) {
    return null
  }

  let longestWord = ""
  for (let i = 0; i < words.length; i++) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord
}




// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function sumNumbers(numbers) {
  
  
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    
    sum += numbers[i];
  }
return sum
}
return sumNumbers(numbers)


// Iteration #3.1 Bonus:
function sum() {}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];



function sumNumbers(numbers) {
  
  
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    
    sum += numbers[i];
  }
return sum
}
return sumNumbers(numbers)




function averageNumbers(numbersAvg) {
  return sumNumbers(numbersAvg) / numbersAvg.length

}
return (averageNumbers(numbersAvg))






function isPalindrome(word) {
  // Write your algorithm here
  //A palindrome is a word that reads the same backward as forward. To determine if a word is a palindrome, we can compare the original word to its reversed version. If both are the same, the word is a palindrome.
}

/* 
  Pseudocode:
  1. Take the input string and split it into an array of characters.
  2. Reverse the array of characters.
  3. Join the reversed array back into a string.
  4. Compare the original string with the reversed string.
  5. If they are the same, return true.
  6. Otherwise, return false.
*/

/*
  Explanation:
  The function first reverses the input string by splitting it into an array of characters, reversing the array, and then joining it back into a string. It then compares the reversed string with the original string. If they are the same, it returns true (indicating the word is a palindrome). If not, it returns false.
*/
function isPalindrome(word){
  //reverse the input
  const reverseWord = word.split("").reverse().join('')

  //compare the original string with the reversed string
  return word === reverseWord
}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

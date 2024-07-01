// function ReverseNumber(n){
//       return n.split("").reverse().join("");
// }

// const num = prompt("Enter a number");
// console.log('The Given Number is', (num));
// const result = ReverseNumber(num);
// console.log("The Reverse Number is",(result));

function ReverseNumber(num){
 
      let rev, lastDigit = 0;

      while(num > 0){
      rev = rev % 10;
      num = parseInt(num / 10);
      lastDigit = lastDigit * 10 + rev;
      }

}
 const num = prompt('Enter a Number:');
console.log("original Number is ", (num));
const result = ReverseNumber(num);
console.log("Reverse Number is ", (result));
function Add( num ){
    const convertToString = num.toString();
    const convertToArray = convertToString.split('').map((num) =>{
        return parseInt(num)
   })
   const sum = convertToArray.reduce((a,b) =>{
   return a + b;
   })
   return sum;
   
}


const num = prompt("Enter a Digit");
console.log('The Given Digit is', (num));
const result = Add(num);
console.log("The Sum is",(result));
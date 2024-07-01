//    const string = prompt("Enter a String");
//    let count = 0;
    
//      for(let i = 0; i<string.length; i++){
//          const str = string[i].toLowerCase();
//      if (str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' ){
//             count++;
//         }
//      }
         
//      console.log('The Given String is', (string));
//      console.log('Vowel', count)
//      console.log('Consonant', string.length - count);   
    const string = prompt('Enter a String');
    let coCount = 0;
    let voCount = 0;
    // const vowel = ['a', 'e', 'i', 'o', 'u'];
    for(let i = 0; i<string.length; i++){
        const str = string.charAt();
        if('aeiouAEIOU'.indexOf(str) !== -1){
            voCount++;   
        }  
        else{
            coCount++;
        }
    }
    console.log('The Given String is', (string));
    console.log('Vowel', voCount)
    console.log('Consonant', string.length - voCount);   






// function Check( X ){

//     // const X = prompt('Enter a String:');
//     if( X == 'a' || X == 'e' || X == 'i' ||X == 'o' || X == 'u' ||
//         X == 'A' || X == 'E' || X == 'I' || X == 'O' || X == 'U' 
//     ){
//         console.log('The Letter is Vowel');
//     }
//     else{
//         console.log('The Letter is Consonant');
//     }
// }

//  const string = prompt('Enter a Character:');
//  Check(string);
function check( X ){

    let vowel = ['a', 'e', 'i', 'o', 'u']
    if (vowel.includes(X)) {
        console.log('The letter is Vowel',(X));
    }
    else{
        console.log("The letter is Consonants",(X));
    }
}
const string = prompt('Enter a Character:');
check(string);
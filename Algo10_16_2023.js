
//            V
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";


function rehash(str) {

}

rehash(str1);
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");

// hints
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")











function rehash(str) {
    let result = "";
    const map = {};// track occurrances
    let number = "";//track current number string
    let letter = str[0];//track current letter
    for (let i = 1; i <= str.length; i++) {
        if (isLetter(str[i]) || i == str.length) { //check if character is letter or if at array end
            if (map[letter]) {
                map[letter] += parseInt(number);//if hashmap already contains the letter as a key, add number to value
            }
            else {
                map[letter] = parseInt(number);//if not create new key/value pair
            }
            letter = str[i];//move on to next letter
            number = "";//reset number tracking
        }
        else {
            number += str[i];//if character is a number, concat to tracking variable
        }
    }
    for (char of Object.keys(map).sort()) {//loop through alphabetical array of keys constructing correct hash through concatination
        result += char;
        result += map[char];
    }
    return result;//boop
}
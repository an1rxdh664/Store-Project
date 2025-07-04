// JSON is universal and is used to send data to another computers
// functions inside and object or METHODS are not supported in JSON
// That's why when you stringify a object which have a function inside
// It will not do anything to the function and would not even display it in the JSON
// JSON.stringify() results in string, so if we were to console.log the type of it, it will return string.

// let obj = {
//     name: 'Anirudh',
//     age: 20,
//     isMarried: false,
//     fun: function doSomething(){
//         console.log("Hii")
//     }
// };

// so this is an object with some key value pairs. To convert it into a JSON object we will do :

// const jsonString = JSON.stringify(obj);
// console.log(jsonString);

// This returns 
// {"name":"Anirudh","age":20,"isMarried":false}
// Every key is now converted into strings.
// and the function is skipped.

// To convert a JSON object into a javscript object we use JSON.parse() method

// const jsObject = JSON.parse(jsonString);
// console.log(jsObject);


// LOCAL STORAGE --->
// Variables are temporary containers to store data and loses data everytime the page refreshes
// So we use Local storage to keep our data stored even if the page is refreshed.

// localStorage.setItem() --> stores the item into the local storage
// Now this METHOD takes two arguments, ('name', 'value'), and it only support string
// localStorage.getItem() --> gets the item from the local storage

// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000



// LEETCODE - Roman to integer 
// const string = "MCMXCIV";
// var romanToInt = function (s){
//     let number = 0;
//     for(let i=0;i<s.length;i++){
//         if(s[i] === 'I') {
//             if(s[i+1] === 'V'){
//                 number += 4; 
//                 i++;
//             }
//             else if (s[i+1] === 'X') {
//                 number += 9; 
//                 i++;
//             }
//             else number = number + 1;
//         } else if(s[i] === 'X') {
//             if(s[i+1] === 'L') {
//                 number += 40;
//                 i++;
//             }
//             else if(s[i+1] === 'C') {
//                 number += 90;
//                 i++;
//             }
//             else number += 10;
//         } else if(s[i] === 'C') {
//             if(s[i+1] === 'D') {
//                 number += 400;
//                 i++;
//             }
//             else if(s[i+1] === 'M') {
//                 number += 900;
//                 i++;
//             }
//             else number += 100;
//         } else if(s[i]==='V') number += 5;
//         else if(s[i]==='L') number += 50;
//         else if(s[i]==='D') number += 500;
//         else if(s[i]==='M') number += 1000;
//     }
//     return number;
// }

// const strs = "[]()}";
// const strs = "(){}";

// var isValid = function(s) {
//         let flag = false;
//     for(let i=0;i<s.length;i++){
//         if(s[i] === '('){
//                 if(s[i+1] === ')'){
//                 flag = true;
//             } else {
//                 flag = false;
//                 continue;
//             }
//         } else if(s[i] === '['){
//             if(s[i+1]===']'){
//                 flag = true;
//             } else {
//                     flag = false;
//                 continue;
//             }
//         } else if(s[i]==='{'){
//             if(s[i+1]==='}'){
//                     flag = true;
//                 } else {
//                         flag = false;
//                 continue;
//             }
//         } else if(s[i]===')' && flag!=true) {
//             flag = false;
//         } else if(s[i]===']' && flag!=true){
//                 flag = false;
//         } else if(s[i]==='}' && flag!=true){
//             flag = false;
//         }
//     }
//     return flag;
// };

// Valid parenthesis
// const strs = "({{{{}}}))";
// const strs = "[()]";

// var isValid = function(s) {
//    const stack = [];
//    const map = {
//     ')' : '(',
//     ']' : '[',
//     '}' : '{'
//    };

//    for(let i of s){
//     if(i==='(' || i==='[' || i==='{'){
//         stack.push(i);
//     } else {
//         if(stack.pop() !== map[i]) return false;
//     }
//    }
//    if(stack.length === 0) return true;
//    else false;
// };


// console.log(isValid(strs))


// let product1 = {
//     name: "bra",
//     price: 300
// }
// let product2 = {
//     name: "bra",
//     price: 300
// }

// // function comparePrice(prod1, prod2){
// //     if(prod1.price > prod2.price) return `${prod2.name} is cheaper`;
// //     else if(prod2.price > prod1.price) return `${prod1.name} is cheaper`;
// // }

// function isSameProduct(prod1, prod2){
//     if(prod1.name === prod2.name){
//         if(prod1.price === prod2.price) return true;
//     } else return false;
// }

// console.log(isSameProduct(product1, product2));

// const arr1 = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10,11,12,13,14,15,16,17];

// var findMedianSortedArrays = function(nums1, nums2) {
//     const newArray = (nums1.concat(nums2)).sort((a,b)=>a-b);
//     if(newArray.length%2!==0){
//         return newArray[Math.floor(newArray.length/2)];
//     }
//     return (newArray[Math.floor(newArray.length/2 - 1)] + newArray[Math.floor(newArray.length/2)]) / 2.0;
// };
// // findMedianSortedArrays(arr1,arr2);
// console.log(findMedianSortedArrays(arr1,arr2));


// const array = [1,4,5,2,3];
// console.log(array.sort());



// Reverse Integer - 32Bit
// let nums = 1534236469;
// var reverse = function(x) {
//     let rev = 0;
//     while(x!=0){
//         rev = rev * 10 + (x%10);
//         x = Math.trunc(x / 10);
//     }
//     if(rev>=Math.pow(-2,31) && rev<=(Math.pow(2,31) - 1)) return rev;
//     else return 0;
// };
// reverse(nums);
// console.log(reverse(nums));



// const str = "-91283472332";
// const str = "+-12";
// const str = "0-1";
// const str = "-011-2a23";

// const str = "2147483646";
// const str = "  +  413";
// var myAtoi = function(s) {
//     let number = 0;
//     let readDigit = false;
//     let isNegative = false;
//     for(let i=0;i<s.length;i++){
//         if(s[i]===' ') continue;
//         else if(s[i]==='-' && readDigit===false){
//             if(s[i+1] >= '0' && s[i+1] <= '9'){
//                 isNegative = true;
//             } else break;
//         } else if(s[i]==='+' && readDigit===false){
//             if(s[i+1] >= '0' && s[i+1] <= '9'){
//                 readDigit = true;
//                 continue;
//             } else break;
//         } else if(s[i]==='0' && s[i+1]===' '){
//             break;
//         }
//         else if(s[i]==='0' && readDigit===false){
//             readDigit = true;
//             continue;
//         }
//         else if(s[i] < '0' || s[i] > '9'){
//             break;
//         } else if((s[i]==='-' || s[i]==='+') && readDigit===true){
//             break;
//         }
//         else{
//             number = number + Number(s[i]);
//             number *= 10;
//             readDigit = true;
//             if(!(s[i + 1] >= '0' && s[i + 1] <= '9')){
//                 break;
//             }
//         }
//     }
//     number = number / 10;
//     if(number>=Math.pow(-2,31) && number<=(Math.pow(2,31) - 1)){
//         if(isNegative){
//             number = -number;
//             return number;
//         } else return number;
//     } else {
//         if(isNegative){
//             number = Math.pow(-2,31);
//             return number;
//         } else {
//             number = Math.pow(2,31) - 1;
//             return number;
//         }
//     }
// };
// console.log(myAtoi(str));

// if("a"===NaN) console.log(true);
// else console.log(false);


// Plus one leetcode question
// var plusOne = function(digits) {
//     let empStr = '';
//     for(let i of digits) empStr += String(i);
//     let empArr = Number(empStr) + 1;
//     empStr = String(empArr);
//     let retArr = [];
//     for(let i of empStr) retArr.push(i);
//     return retArr;
// };
// let digits = [4,3,2,1]
// plusOne(digits);

// const str = "PAYPALISHIRING";
// let concStr = '';
// let numRows = 2;
// for(let i=0;i<str.length;i++){
//     if(str[i+1]==='') mat.push([str[i]]);
//     else {
//         mat.push([str[i], str[i+1]]);
//         i++;
//     }
// }
// for(let i=0;i<numRows;i++){
//     for(let j=0;j<(str.length/2);j++){
//         concStr += mat[j][i];
//     }
// }
// console.log(mat)


// Leetcode Q - Last Word length
// const s = "Hello World";
// const s = "   fly me   to   the moon  ";

// var lengthOfLastWord = function(s) {
//     let lastWord = "";

//     let read = false;
//     for(let i=s.length-1;i>=0;i--){
//         if(s[i]===' ' && read===true){
//             break;   
//         } else if(s[i]===' '&&read===false){
//             continue;
//         }
//         lastWord = lastWord + s[i];
//         read = true;
//     }

//     return lastWord.length;
// };

// lengthOfLastWord(s);

var kthCharacter = function(k) {
    let word = "z";
    let wordArray = [];
    wordArray.push(word.split(''));
    console.log
    // for(let i=0;i<k;i++){
        
    // }
};
kthCharacter(5);
// console.log(kthCharacter(5));



// if(word[i]==='z') concStr = 'a';
// else {
//     asciiVal = word.charCodeAt(i) + 1;
//     concStr = String.fromCharCode(asciiVal);
//     word += concStr;
// }
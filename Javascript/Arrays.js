// includes of 

// let array = ["jan","jul","mar","aug"];
// console.log(array.indexOf("mar"));

// concatenation 

// let newArr = ["Sep","oct","nov","dec"];
// let arr = array.concat(newArr);


// reverse method
// console.log(arr.reverse());

// splice

// console.log(array.splice(1,0,"Feb"));
// console.log(array);

// array.splice(1,2,"july","aug");

// let lang = ["html","css","javascript","c++","c#","java"];
// console.log(lang.indexOf("javascript"));

// let arr = [1,2,3];
// let arr2 = arr
// console.log(arr===arr2);


// nested elements 

// let nums = [[1,2],[3,4],[5,6]];
// // console.log(nums[1]);
// for (let num of nums){
//     console.log(num);
// }

// let game = [['x', null, 'o'],[null,'x',null],['o',null,'x']];
// // for (let num of game){
// //     console.log(num);
// // }
// game[0][1] = '0';
// console.log(game[0]);



//  Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//  positive number].
//  For example: for array [7, 9, 0,-2] and n=3
//  Print, [7, 9, 0]

// let array = [7,9,0,-2];

// let n = 3;

// console.log(array.slice(0,n));


//  Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//  positive number].
//  For example: for array [7, 9, 0,-2] and n=3
//  Print, [9, 0,-2]

// let ans = array.slice(array.length-n);
// console.log(ans)

// let str = prompt("enter your string");
// if(str == 0){
//     console.log("its empty");
// }else{
//     console.log("its not ");
// }

// let str = "SaIfUrReHaM";
// let idx= 6;

// if(str[idx]==str[idx].toLowerCase()){
//     console.log("it is lower case")
// }else{
//     console.log("its not ")
// }

let str = prompt("please enter your string ");
console.log(`orignal string : ${str}`);
console.log(` string after trim :${str.trim()}`);
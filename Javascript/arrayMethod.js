// let arr = [1,2,3,4,5];

// let newArr = arr.map((arr)=> {
//     return arr*arr;
// }).map((arr) => {
//     let 
// })
// console.log(newArr);

// setTimeout(()=> {
//     console.log("this is setTimeout")
// }, 1000);

// setInterval(()=> {
//     console.log("this is setInterval");
// },1000);

// const square = ((n)=> {
//     console.log( n*n);
// })
// square(5);




// let id = setInterval(()=> {
//     console.log("hello world");
// },2000);
// setTimeout(()=>{
//     clearInterval(id);
// },10000);

// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers

// const arrayAverage = ((arr)=> {
//     let num = 0;
//     for(let number of arr){
//         num += number;
//     }
//     console.log( num / arr.length);
// })
// let arr = [1,2,3,4,5,6];
// arrayAverage(arr);

// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.

// const isEven = (num) => {

//     if(num % 2==0){
//         console.log("it is even number");
//     }
//     else{
//         console.log("it is odd number");
//     }
// }
// let num = prompt("enter the number :");
// isEven(num);


// Map function 

// let num = [1,2,3,4,5,6];

// let squar = num.map((n)=> n*n
// )

// console.log(squar);

// let student = [
//     {
//      name : "saifur",
//      marks : 98
//     },
//       {
//      name : "osama",
//      marks : 92
//     },
//       {
//      name : "anas",
//      marks : 88
//     }
// ]

// let gpa = student.map((n)=> {
//     return n.marks/10;
// })

// console.log(gpa);


// Filter function 

// let num = [1,2,3,4,5,6,7,8,9,10];

// let even = num.filter((n)=>{
//     return n%2==0;
// })
// console.log(even);

// let num = [1,2,3,4,5,6,7,8,9,10]

// let reduce = num.reduce((acc,el)=> {
//     return acc+el;
// })
// console.log(reduce);


// let num = [1,2,3,4,5];
// let newNum = num.reduce((acc,val) =>{
//     return acc+val });
// console.log(newNum);

// let fruit = ["mango","apple","pineapple"];
// fruit.push("banana");
// fruit.unshift("melon");
// fruit.splice(2,1,"guava")
// console.log(fruit);

// let square = num.map((num)=> {
//     return num*num
// })
// console.log(square);

let num = [1,2,3,4,5,6,7,8,9,10];
let mynum = []
let even = num.filter((num)=> {
    if(num%2==0){
         mynum.push(num);
    }
    // mynum.push(number);

})
console.log(mynum);
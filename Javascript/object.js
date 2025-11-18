// let student = {
//     name : "saifur",
//     age : 22,
//     marks : 100,
//     city : "ahmedabad"
// }

// student.city = "berlin";
// student.gender = "male";
// student.marks = "A";
// delete student.marks;
// console.log(student);

// let students = [
//     {
//         name: "saifur",
//         rollno : 1,
//         city : "ahmedabad"
//     },
//      {
//         name: "osama",
//         rollno : 2,
//         city : "ahmedabad"
//     },
//      {
//         name: "anas",
//         rollno : 3,
//         city : "ahmedabad"
//     }
// ]
// students[0].name = "saifur rehman";
// students[0].rollno = 4
// console.log(students);
// console.log(typeof(students[0].rollno))


// guess game

// const maxNo = Number(prompt("enter the maximum number :"));
// // console.log(maxNo);

// const random = Math.floor(Math.random()*maxNo)
// console.log(random);

// let guess = prompt("enter the number :");

// while(true){
//     if(guess == "quit"){
//         console.log("game is over ");
//         break;
//     }
//     if(guess== random){
//         console.log("correct answer");
//         break;
//     } else if(guess < random){
//         guess = prompt("hint : guess is too small try again");
//     }else{
//         guess = prompt("hint : guess is too big try again");
//     }


    // else{
    //     console.log("wrong try again");
    //     guess = prompt("enter the number :");
    // }
// }


// generate random number from 1 to 100


// let num = Number(prompt("enter the number from 1 to 100"));
// num = Math.floor(Math.random() * 100); 
// console.log(num);
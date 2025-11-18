// print all odd number from 1 to 15
// print all even  number from 1 to 15

// for(let i=0; i<=15; i=i+2){
//     console.log(i);
// }

// let favMovie = "Avtar";

// let movie = prompt("enter name of movie");

// while((movie != favMovie) && (movie != "quite")){
//     console.log("wrong ")
//     movie = prompt("enter name of movie");
// }


// let fruit = ["a","b","c","d","e","f","g","h","i","j","k","l",",","m","n","o","p","p","q","r","s"];

// for(let i=0; i<fruit.length; i=i+2){
//     console.log(`${i}:${fruit[i]}`);
// // }

// for(let i=fruit.length-1; i>=0; i-- ){
//     console.log(`${i}-${fruit[i]}"`);
// }


// Todo app

let todo = [];

let req = prompt("enter your request please");

while(true){
    if(req=="quit"){
        console.log("quitting the app");
        break;
    }

    if(req=="list"){
        console.log("--------------")
        for(let i=0; i<=todo.length; i++){
            console.log(i,todo[i]);
        }
         console.log("--------------")
    }

     if(req=="add"){
        let newTask = prompt("enter your new task");
        todo.push(newTask);
        console.log("task added");
    }

     if(req=="delete"){
        let idx = prompt("enter the index of item");
        todo.splice(idx,1);
        console.log("task deleted ");
    }
    else{
        console.log("request not found")
    }
    req = prompt("enter your request please");
}
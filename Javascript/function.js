// function average(a,b,c){
//     console.log((a+b+c)/3);
// }
// average(5,5,5);


// function table(n){
//     for (let i=1; i<=10; i++){
//         console.log(`${n} x ${i} = ${i*n}`);
//     }
// }
// table(6);

// function sum(n){
//     let sum = 0;
//     for(let i=1; i<=n; i++){
//         sum = sum + i;
//         console.log(sum);
//     }
// }
// sum(5);

let str = ["hello", " my", " name", " is", " saifur"]

function concate(str) {
        let result = " ";
        for(let i=1; i<str.length; i++){
            result += str[i];
        }
        console.log(result);
}
concate(str);
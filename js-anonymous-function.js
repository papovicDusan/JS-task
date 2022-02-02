// task 1
const numbers = [4, 9, 16, 25];
const newNumbers=numbers.map(x=>x*x);
console.log('newNumbers',newNumbers);

// task 2
(IIFE = (x,y) =>{
    let sum= x+y;
    console.log('sum',sum);
})(5,10);

//task 3

timesTwo=(number)=> number*2;
let numberTimesTwo=timesTwo(10);
console.log('numberTimesTwo',numberTimesTwo);
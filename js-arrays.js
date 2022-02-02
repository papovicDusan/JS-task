
let colours = ["black", "blue", "red"];

for (let i = 0; i < colours.length; i++) {
    console.log('colours with for loop',colours[i]);
}

colours.forEach(x=> console.log('colours with forEach',x));

// task 1
let numbers=[2,4,5,7,8,9,15,20,30,40];

let rotateArray = (nums, k)=> {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  console.log('rotate arrays',nums);
  }

  rotateArray(numbers,3);

  //task 2
  let array1 = [1, 2, 3, 4,5,6,7,8,9,10];
let reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log('sum arrays',array1.reduce(reducer, 50));

//task 3
let createArrays = (number)=> {
let arrays=[];
let i =0;
    for (i; i <number; i++) {
       arrays[i]=i;
    }
    for (i ;i>=0 ; i--) {
        for (let j = i ;j>=0 ; j--) {
        console.log(j);
        }
     }
  return arrays;
  }

  createArrays(5);

 // task 4
 var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];
  
  let zooInventory=(zoo)=>{
    let arrays=[];
    for (let i=0; i<zoo.length; i++) {
        arrays[i]=zoo[i].toString();
        console.log('item',arrays[i]);
     }
 console.log('arrays',arrays);
 return arrays;
  }
  
  zooInventory(myZoo);

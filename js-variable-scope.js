

// task 1 and 2
function scopeFunction1() {

    for (let i = 0; i < 5; i++) {
        var x = 10;
    }
    console.log('var x', x);
    console.log('let i', i);
}

// task 3
let y = 5;
function scopeFunction3() {
    console.log('y', y);
}

// task 4
function scopeFunction4() {
    let z = 15;
}
console.log('z', z);

//scopeFunction1();
//scopeFunction3();
 // scopeFunction4();

let a = '22'; // '22'
let b = 33; // 33
a = a + b; // a: "2233", b: 33
// or the same thing
a = a + b.toString(); // "2233"

b = b + a; // b: "3322", a: "22"
//if we want b to be a numner we do

b = b + Number(a); // b: 55, a: "22"

//be careful as not everything could be cast to a number
let a = 'hello';
let b = 33;
b = b + Number(a) // b: NaN, a: 'hello'


//lets take a look at foolowing
let a = 'hello'
let b = 33;
b = b + true; // a: 'hello', b: 34 
/* any number less then 0 or greater then 0 is true So true gets cast to be 1.This is quite unusual. */
// what happens if we say true + true
let a = 'hello';
let b = 33;
b = b + true + true; // b: 35,
b = b + (true == true); // b: 34 /* this result is being cast to be number 1*/


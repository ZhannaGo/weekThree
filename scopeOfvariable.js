//message is declared outside the function
var message = "thinking global";
 
logMessage();
 
function logMessage() {
    console.log("Inside function");
    console.log(message);
}
 
console.log("Outside function");
console.log(message);


//this will give us Inside function, "declared inside function" and error
function logMessage() {
    // message can only be used in logMessage
    var message = "declared inside function";
    console.log("Inside function");
    console.log(message);
}
logMessage();
console.log(message);
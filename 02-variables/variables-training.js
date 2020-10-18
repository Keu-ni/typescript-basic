// let <variableName>: <type> = <initial value>;
var found = true;
var grade = 177.7;
var firstName = "Keuni";
var lastName = "Ahn";
// "found" is not another type absolutely!
// found = 0; <-- error 
//Type: any - "any type can assign different value of other type."
var myDate = 26.8;
myDate = true;
myDate = 15.6;
// error break
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
// use template Strings
console.log("Hi " + firstName + " " + lastName);

// let <variableName>: <type> = <initial value>;
let found: boolean = true;
let grade: number = 177.7;
let firstName: string = "Keuni";
let lastName: string = "Ahn";

// "found" is not another type absolutely!
// found = 0; <-- error 


//Type: any - "any type can assign different value of other type."
let myDate: any = 26.8;
myDate = true;
myDate = 15.6;


console.log(found);
console.log("The grade is " + grade);

console.log("Hi " + firstName + " " + lastName);

// use template Strings
console.log(`Hi ${firstName} ${lastName}`);
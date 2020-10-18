class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// Let's create an instance

let myCustomer = new Customer("Keu-ni", "Ahn");

// myCustomer.firstName = "Keu-ni";
// myCustomer.lastName = "Ahn";

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
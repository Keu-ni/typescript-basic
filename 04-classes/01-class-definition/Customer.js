var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
// Let's create an instance
var myCustomer = new Customer("Keu-ni", "Ahn");
// myCustomer.firstName = "Keu-ni";
// myCustomer.lastName = "Ahn";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

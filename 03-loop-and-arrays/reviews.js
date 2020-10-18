var reviews = [2, 5, 3.6, 8, 10.2];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var avg = total / reviews.length;
console.log("Review average" + avg);

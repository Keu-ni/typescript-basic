let reviews: number[] = [2, 5, 3.6, 8, 10.2];

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let avg: number = total / reviews.length;
console.log("Review average " + avg);
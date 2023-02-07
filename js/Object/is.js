console.log(Object.is('1', 1));
console.log(Object.is(NaN, NaN));
console.log(Object.is(-0, 0));

const obj = {};
console.log(Object.is(obj, {}));

// Examples
// Using Object.is()
// Case 1: Evaluation result is the same as using ===
Object.is(25, 25);

// Case 2: Signed zero


// Case 3: NaN

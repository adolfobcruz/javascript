const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

// Cloning a Object
const obj = { a: 1 };
const copy = Object.assign({}, obj);

console.log(copy);
// Expected output: { a: 1 }
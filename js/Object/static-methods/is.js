// console.log(Object.is('1', 1));
// console.log(Object.is(NaN, NaN));
// console.log(Object.is(-0, 0));

// const obj = {};
// console.log(Object.is(obj, {}));

// Examples
// Using Object.is()
// Case 1: Evaluation result is the same as using ===
// console.log(Object.is(25, 25));
// console.log(Object.is('foo', 'foo'));
// console.log(Object.is('foo', 'bar'));
// console.log(Object.is(null, null));
// console.log(Object.is(undefined, undefined));
// // console.log(Object.is(window, window));
// console.log(Object.is([], []));

// const foo = { a: 1 };
// const bar = { a: 1 };
// const sameFoo = foo;
// console.log(Object.is(foo, foo));
// console.log(Object.is(bar, bar));
// console.log(Object.is(foo, bar));
// console.log(Object.is(foo, sameFoo));


// Case 2: Signed zero
// console.log(Object.is(0, -0));
// console.log(Object.is(+0, -0));
// console.log(Object.is(-0, -0));

// Case 3: NaN
console.log(Object.is(NaN, 0 / 0));
console.log(Object.is(NaN, Number.NaN));
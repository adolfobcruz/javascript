// const date1 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// console.log(date1.toLocaleString('ar-EG'));

// const number1 = 123456.789;

// console.log(number1.toLocaleString('de-DE'));

// Examples
// Using the base toLocaleString() method
// const obj = {
//   toString() {
//     return 'My Object';
//   },
// };

// console.log(obj.toLocaleString());

// const testArray = [4, 7, 10];

// const euroPrices = testArray.toLocaleString('fr', {
//   style: 'currency',
//   currency: 'EUR',
// });

// console.log(euroPrices);

// Date toLocaleString() override
// const testDate = new Date();
// console.log("🚀 ~ file: toLocaleString.js:30 ~ testDate:", testDate)

// const deDate = testDate.toLocaleString('de');
// console.log("🚀 ~ file: toLocaleString.js:33 ~ deDate:", deDate)

// const frDate = testDate.toLocaleString('fr');
// console.log("🚀 ~ file: toLocaleString.js:36 ~ frDate:", frDate)

// Number toLocaleString() override
const testNumber = 2901234564;
console.log("🚀 ~ file: toLocaleString.js:40 ~ testNumber:", testNumber)

const deNumber = testNumber.toLocaleString('de');
console.log("🚀 ~ file: toLocaleString.js:43 ~ deNumber:", deNumber)

const frNumber = testNumber.toLocaleString('fr');
console.log("🚀 ~ file: toLocaleString.js:46 ~ frNumber:", frNumber)

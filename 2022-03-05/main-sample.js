

// IIFE ( Immediately Invoked Function )
// we have some initiation code that we don't need to use again, we could use the IIFE pattern
(() => {console.log("IIFE")})()



// Async & Await
// await is only used inside async function to wait for some other asynchronous operation to fullfill
const foo = async () => {
  const res = await bar();
  console.log(res);
  const res2 = await bar();
  console.log(res2);
  return 'Hi';
}
// foo().then((res) => console.log(res));
// console.log(foo());

function bar() {
  return new Promise((resolve, reject) => setTimeout(() => resolve("Hello"), 5000));
}

function bar1() {
  return fetch('https://restcountries.com/v2/all');
}
foo();
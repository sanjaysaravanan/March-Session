// IIFE --> Immediately invoked function Expression

// function SomeFunc () {
//   console.log("Into Some Func");
//   return "Hello";
// }
// SomeFunc();


// (function () {
//   console.log("SomeFunc")
// })();

// (() => {
//   console.log("Some Arrow Func");
// })();


// async ----> make particular lines of statements asynchronous which doesn't disturb/stop the normal flow of the code execution
// console.log("Line 1");

// Normal Async function
// async function Sample() {
//   console.log("Line 2");
//   console.log("Line 3");
//   console.log("Line 4");
// }

// Arrow Function Async: Return a promise
// Async is used to combine set of asynchronous operations into a single promise
// await can be used only inside async block
// const Sample = async () => {
//   console.log("Hi There");
//   try {
//     const result = await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Error");
//       }, 2000);
//     });
//     console.log(result);
//   } catch(error) {
//     console.log(error);
//   }
//   return "Hello World";
// } 
// Sample().then(res => console.log(res))

// setTimeout(() => {
//   console.log("SetTime Out Func");
// }, 2000);
// console.log("Hi There");
// console.log("Hello World");


// const Sample = async () => {
//   console.log("Hi There");
//   let resultRes = null;
//   try {
//     const response = await fetch('https://restcountries.com/v2/all');
//     const data = await response.json();
//     data.forEach(async (element) => {
//       try {
//         const cc = element.name;
//         const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cc}&appid=991f626650507e6605c2ca33f8edc191`)
//         const weatherData = await weatherResponse.json();
  
//         console.log(`Temp: ${weatherData.main.temp}, Max Temp: ${weatherData.main.temp_max}, Min Temp: ${weatherData.main.temp_min}`);
//       } catch (error) {
//         console.log(error);
//       }
//     });
    
//     resultRes = data;
//   } catch(error) {
//     // console.log(error);
//     resultRes = "Some error Occurred";
//     console.log(resultRes);
//   }
//   return resultRes;
// } 



// const getCovidData = async () => {
//   const value = document.getElementById('inp').value;
//   try{
//     const response = await fetch(`https://api.covid19api.com/total/dayone/country/${value}`);
//     const data = await response.json();
//     const tableDiv = document.getElementById("table-div");
//     tableDiv.innerHTML = "";
//     const table = document.createElement('table');
//     const trHead = document.createElement('tr');
//     ['Date', 'Active', 'Confirmed', 'Deaths'].forEach((str) => {
//       const th = document.createElement('th');
//       th.innerText = str;
//       trHead.append(th);
//     })
//     table.appendChild(trHead);
//     data.forEach(({Date, Confirmed, Active, Deaths}) => {
//       console.log(`${Date.slice(0, 10)} ---> Active: ${Active}, Confirmed: ${Confirmed}, Deaths: ${Deaths}`);
//       const trBody = document.createElement('tr');
//       const thDate = document.createElement('th');
//       thDate.innerText = Date.slice(0, 10);
//       const thActive = document.createElement('th');
//       thActive.innerText = Active;
//       const thConfirmed = document.createElement('th');
//       thConfirmed.innerText = Confirmed;
//       const thDeaths = document.createElement('th');
//       thDeaths.innerText = Deaths;
//       trBody.append(thDate);
//       trBody.append(thActive);
//       trBody.append(thConfirmed);
//       trBody.append(thDeaths);
//       table.appendChild(trBody);
//     });
//     tableDiv.appendChild(table);
//   } catch (error) {
//     console.log(error);
//   }
// }


const sample = async () => {
  let resultRes = null;
  try {
    const response = await fetch("https://api.covid19api.com/total/dayone/country/india");
    const data = await response.json();
    data.forEach(({ Date, Confirmed, Active, Deaths }) => {
      console.log(`${Date}---> Active: ${Active}, confirmed:${Confirmed},Death:${Deaths}`);
    });
  }
  catch (error) {
    resultRes = "Some error";
  }
}
sample();



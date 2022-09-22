'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const APIKEY = '109941734790133162012x48486';
const baseURL = 'https://geocode.xyz/';

const renderCountryData = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    // console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMsg} (${response.status})`);
    }
    return response.json();
  });
};

// LEC Other Promise Combinators: race, allSettled and any

// ! Promise.race
// (async function () {
//   const res = await Promise.race([
//     getJSON(`https://restcountries.com/v2/name/italy`),
//     getJSON(`https://restcountries.com/v2/name/egypt`),
//     getJSON(`https://restcountries.com/v2/name/mexico`),
//   ]);
//   console.log(res[0]);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(() => {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// Promise.race([getJSON(`https://restcountries.com/v2/name/italy`), timeout(0.1)])
//   .then(res => console.log(res[0]))
//   .catch(err => console.error(err));

// ! Promise.allSettled

// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ]).then(res => console.log(res));

// ! Promise.any
// Promise.any([
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
//   Promise.resolve('Another Success'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.error(err));

// LEC Running Promises in Parallel

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v2/name/${c1}`),
//       getJSON(`https://restcountries.com/v2/name/${c2}`),
//       getJSON(`https://restcountries.com/v2/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (error) {
//     console.error(error);
//   }
// };

// get3Countries('United States of America', 'United Kingdom', 'Portugal');

// LEC Consuming Promises with Async/Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function () {
//   try {
//     // ! Geo Location
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const url = `${baseURL}/${lat},${lng}?geoit=json&auth=${APIKEY}`;

//     // ! Reverse Geo Coding
//     const resGeo = await fetch(url);
//     if (!resGeo.ok) throw new Error('Problem getting location data');
//     const dataGeo = await resGeo.json();

//     // ! Country Data
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${dataGeo.country}`
//     );
//     if (!res.ok) throw new Error('Problem getting Country');
//     const data = await res.json();
//     renderCountryData(data[0]);
//     return `You are in ${dataGeo.city}, ${dataGeo.country}`;
//   } catch (err) {
//     console.error(err);
//     renderError(`Something went wrong 🤮 🤮 🤮 ${err.message}. Try Again`);
//     throw err;
//   }
// };

// console.log('1. Will get location');
// // const city = whereAmI();
// // console.log(city);
// whereAmI()
//   .then(city => console.log(`2. ${city}`))
//   .catch(err => console.error(err.message))
//   .finally(() => console.log('3. Finished getting location'));

// ! IIFE
// (async function () {
//   try {
//     console.log('1. Will get location');
//     const city = await whereAmI();
//     console.log(`2. ${city}`);
//   } catch (err) {
//     console.error(`2. ${err.message}`);
//   }
//   console.log('3. Finished getting location');
// })();

// LEC Promisifying the GeoLocation API

// NOTE A Callback API
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.log(err)
// );

// ! Promisify
// const getPosition = function () {
//   return new Promise(function (resolve, reject) {\
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const renderCityAndCountry = function (data, className = '') {
//   const message = `
//     <h1 class="message">Hi, you are in ${data.city}, ${data.state} in the ${data.country}</h1>
//   `;

//   countriesContainer.insertAdjacentHTML('beforebegin', message);
// };

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       const url = `${baseURL}/${lat},${lng}?geoit=json&auth=${APIKEY}`;

//       return fetch(url);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem with GeoCoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       renderCityAndCountry(data);
//       const country = data.country;
//       if (!country) throw new Error('Problem with GeoCoding coordinates');

//       return fetch(`https://restcountries.com/v2/name/${country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country Not Found ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       renderCountryData(data[0]);
//     })
//     .catch(err => {
//       console.error(`${err} 🤮 🤮 🤮`);
//       // renderError(`Something went wrong 🤮 🤮 🤮 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });

// getGeoCodeJSON(url, 'NOT FOUND')
//   .then(data => {
//     renderCityAndCountry(data);
//     const country = data.country;

//     if (!country) throw new Error('Problem with GeoCoding coordinates');

//     return getJSON(
//       `https://restcountries.com/v2/name/${country}`,
//       'Country Not Found'
//     );
//   })
//   .then(data => renderCountryData(data[0]))
//   .catch(err => {
//     console.error(`${err} 🤮 🤮 🤮`);
//     renderError(`Something went wrong 🤮 🤮 🤮 ${err.message}. Try Again`);
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1;
//   });
// };

// btn.addEventListener('click', whereAmI);

// LEC Building a simple Promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN 💥 🎊 💸');
//     } else {
//       reject(new Error('You LOSE 🤮 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// ! Promisifying the set timeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// ! Fixing the setTimeout call back hell
// TODO I could put this in a helper file to be used when ever I need a timer
// wait(2)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

// ! For Reference
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// ! to resolve immediatly
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Danger Will Robinson!!')).catch(x => {
//   console.error(x);
// });

// LEC The Event Loop in Practice

// console.log('Test Start');
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);
// Promise.resolve('Resolved Promise 1').then(res => console.log(res));

// Promise.resolve('Resolved Promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test End');

// LEC ----------------------

// const renderCountryData = function (data, className = '') {
//   const html = `
//         <article class="country ${className}">
//             <img class="country__img" src="${data.flag}" />
//             <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   +data.population / 1000000
//                 ).toFixed(1)}</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//             </div>
//         </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   //   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   //   countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// // ////////////////////////////////////
// const getCountyData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
//     .then(data => {
//       renderCountryData(data[0]);
//       const neighbor = data[0].borders?.[0];

//       if (!neighbor) throw new Error('No Neighbor Found');

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbor}`,
//         'Country Not Found'
//       );
//     })
//     .then(data => renderCountryData(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🤮 🤮 🤮`);
//       renderError(`Something went wrong 🤮 🤮 🤮 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountyData('United States of America');
// });

// getCountyData('Australia');

// ! Simplified code
// const getCountyData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) {
//         throw new Error(`Country not found (${response.status})`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountryData(data[0]);
//       const neighbor = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountryData(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🤮 🤮 🤮`);
//       renderError(`Something went wrong 🤮 🤮 🤮 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

///////////////////////////////////////
// NOTE URL: https://restcountries.com/v2/

// ! XMLHttpRequest Method - old school way
// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${
//               data.currencies[0].name
//             }</p>
//         </div>
//     </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('United States of America');
// getCountryData('portugal');
// getCountryData('United Kingdom');

// ! Call Back Hell
// const renderCountryData = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//               <h3 class="country__name">${data.name}</h3>
//               <h4 class="country__region">${data.region}</h4>
//               <p class="country__row"><span>👫</span>${(
//                 +data.population / 1000000
//               ).toFixed(1)}</p>
//               <p class="country__row"><span>🗣️</span>${
//                 data.languages[0].name
//               }</p>
//               <p class="country__row"><span>💰</span>${
//                 data.currencies[0].name
//               }</p>
//           </div>
//       </article>
//     `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbor = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     // ! AJAX call country 1
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     // ! Render Country 1
//     renderCountryData(data);

//     // ! Get Neighbor country 2
//     const [neighbor] = data.borders;

//     if (!neighbor) return;

//     // ! AJAX Call 2
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountryData(data2, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbor('United States of America');
// getCountryAndNeighbor('portugal');
// //   getCountryData('United Kingdom');

// BUG This is the old way
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

// ! Fetch API - Promises (es6 feature)
// const request = fetch(
//   `https://restcountries.com/v2/name/United States of America`
// );
// console.log(request);

// const getCountyData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       //console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountryData(data[0]);
//     });
// };

'use strict';

// const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imagesContainer = document.querySelector('.images');

// * --------------Challenge 2-------------------
// TODO - 1) Create Function Create Image with parameter image path
// TODO - 2) Handle the loading image and resolve the promise created with the src attribute
// TODO - 3) Consume the promise and add error handler
// TODO - 4) Pause the execution using the Wait function
// TODO - 5) Load the second image after hiding the first image
// TODO - 6) After 2 seconds hide the second image

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

let image;

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     image = document.createElement('img');
//     image.src = imgPath;

//     image.addEventListener('load', function () {
//       imagesContainer.append(image);
//       resolve(image);
//     });

//     image.addEventListener('error', function () {
//       reject(new Error(`Problem loading Image ${image.status}`));
//     });
//   });
// };

// createImage('./img/img-1.jpg').then(() => {
//   wait(2)
//     .then(() => {
//       // ! Hide first Image
//       image.style.display = 'none';
//     })
//     .then(() => {
//       createImage('./img/img-2.jpg').then(() => {
//         wait(2).then(() => {
//           image.style.display = 'none';
//         });
//       });
//     });
// });

// * --------------Challenge 3-------------------
// TODO 1) Create the Call to CreateImage as async/await
const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    console.log('Image 1 Loaded');
    await wait(2);
    img.style.display = 'none';

    // const img2 = await createImage('./img/img-2.jpg');
    img = await createImage('./img/img-2.jpg');
    console.log('Image 2 Loaded');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.error(error);
  }
};

// loadNPause();

// TODO 2) Create loadAll function
const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    console.log(imgs);

    const imgsEl = await Promise.all(imgs);
    console.log(imgsEl);

    imgsEl.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

loadAll(imgArr);

// * --------------Challenge 1--------------------

// const APIKEY = '109941734790133162012x48486';
// // const url = 'https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=your_api_key';

// const baseURL = 'https://geocode.xyz/';

// // TODO 1) Create a Get JSON function to handle fetch call
// // TODO 2) Reverse GeoCode coordinates to get City and Country
// // TODO 3) Inject a new element above Card Element to show city state
// // TODO 4) Create a Render Response function to render the card data

// const getGeoCodeJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }

//     return response.json();
//   });
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// const renderCityAndCountry = function (data, className = '') {
//   const message = `
//     <h1 class="message">Hi, you are in ${data.city},${data.state} in the ${data.country}</h1>
//   `;

//   countriesContainer.insertAdjacentHTML('beforebegin', message);
// };

// const renderCountryData = function (data, className = '') {
//   const html = `
//       <article class="country ${className}">
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
//       </article>
//       `;

//   countriesContainer.insertAdjacentHTML('beforeend', html);
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const whereAmI = function (lat, lng) {
//   const url = `${baseURL}/${lat},${lng}?geoit=json&auth=${APIKEY}`;
//   getGeoCodeJSON(url, 'NOT FOUND')
//     .then(data => {
//       renderCityAndCountry(data);
//       const country = data.country;

//       if (!country) throw new Error('Problem with GeoCoding coordinates');

//       return getJSON(
//         `https://restcountries.com/v2/name/${country}`,
//         'Country Not Found'
//       );
//     })
//     .then(data => renderCountryData(data[0]))
//     .catch(err => {
//       console.error(`${err} 🤮 🤮 🤮`);
//       renderError(`Something went wrong 🤮 🤮 🤮 ${err.message}. Try Again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   // whereAmI(52.508, 13.381);
//   // whereAmI(19.037, 72.873);
//   // whereAmI(-33.933, 18.474);
//   whereAmI(39.94614, -82.0286);
// });

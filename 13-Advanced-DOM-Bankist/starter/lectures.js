// LEC Selecting, Creating and Deleting Elements

// ! SELECTING ELEMENTS
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');

// console.log(allSections);

// document.getElementById('section--1');
// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));

// ! CREATING AND INSERTING ELEMENTS
// * ex. .insertAdjacentHTML

// const message = document.createElement('div'); // not in DOM yet.
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics';
// message.innerHTML =
//   'We use cookies for improved functionality and analytics <button class="btn btn--close-cookie">Got it</button>';

//header.prepend(message); // now its in the dom. this is inserted at the beginning of the element
// header.append(message); // element cannot be in 2 places. inserted at the end of the element
//header.append(message.cloneNode(true)); // this makes a copy so we get 2 elements on the page

// header.before(message);

// ! DELETE ELEMENT
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// LEC Styles, Attributes, and Classes

// ! Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '105%';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// ! this is used to set the css variables (see ::root in linked style.css)
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ! Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// ! set attributes
// logo.alt = 'Beautiful Minimal Banking';

// ! not standard -- doesn't work this way
// console.log(logo.designer);
// ! this does work though
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// ! to get relative url
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));

// ! Data Attributes
// console.log(logo.dataset.versionNumber);

// ! Classes
// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// BUG DON'T USE THIS
// logo.className = 'jonas';

// LEC Implement Smooth Scrolling

// Smooth Scrolling
// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
// ! Method 1
// ! getBoundingClientRect works from the current viewport
// const s1coords = section1.getBoundingClientRect();
// console.log(s1coords);
// console.log(e.target.getBoundingClientRect());
// console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
// console.log(
//   'height/width viewport',
//   document.documentElement.clientHeight,
//   document.documentElement.clientWidth
// );

// ! scrolling
// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// ! OLD SCHOOL
// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: 'smooth',
// });

// ! More Modern way
// *   section1.scrollIntoView({ behavior: 'smooth' });
// });

// LEC Types of Events and Event Handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function (e) {
//   alert('addEventListener: Great! you are reading the heading');

//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// ! This is Old School
// h1.onmouseenter = function (e) {
//   alert('addEventListener: Great! you are reading the heading');
// };

// LEC Event Propagation in Practice

// rgb(255, 255, 255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);
// Stop Propagation
// e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );

// LEC DOM Traversing
// const h1 = document.querySelector('h1');

// Going downward: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// Going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways - siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

// LEC Building Tabbed Component

// ! See code in script.js

// LEC Lifecyle DOM Events
// document.addEventListener('DOMContentLoaded', function (e) {
//   console.log('HTML parsed and DOM Tree Built!', e);
// });

// window.addEventListener('load', function (e) {
//   console.log('Page Fully Loaded', e);
// });

// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = '';
// });

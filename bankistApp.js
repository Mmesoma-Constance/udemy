"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

////////////////////////////////////////////////////

console.log(document.documentElement);

document.querySelectorAll(".section");
const header = document.querySelector(".header");

// creating element
// .insertAdjacentHTML

const newDiv = document.createElement("div");
newDiv.classList.add("cookie-message");
// newDiv.textContent = 'We use cookies for improved functionality and analytics.'

newDiv.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it! </button>';
header.prepend(newDiv);
header.append(newDiv);

// header.append(newDiv.cloneNode(true));

// header.before(newDiv);
// header.after(newDiv);

// Delete elements

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    newDiv.remove();
    // newDiv.parentElement.removeChild(newDiv)
  });

//styles

newDiv.style.backgroundColor = "#37383d";
newDiv.style.width = "120%";

console.log(getComputedStyle(newDiv).color);
console.log(getComputedStyle(newDiv).height);

newDiv.style.height =
  Number.parseFloat(getComputedStyle(newDiv).height, 10) + 40 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// ATTRIBUTES

const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.className);

logo.alt = "Beautiful Logo";
console.log(logo.getAttribute("designer"));

console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector(".twitter-link");
console.log(link.href);
console.log(link.getAttribute("href"));

// Data Attribute
console.log(logo.dataset.versionNumber);

// classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // not includes

// dont do
logo.className = "Jonas";

const btnScrollTp = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTp.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

// EVENTS

// const alertH1 = function (e) {
//   alert("addEventListener: Great! You are reading the heading");
//   h1.removeEventListener("mouseenter", alertH1);
// };

// const h1 = document.querySelector("h1");
// h1.addEventListener("mouseenter", alertH1);

// setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// // old way
// h1.onmouseenter = function (e) {
//   alert("addEventListener: Great! You are reading the heading");
// };

////////////////////////////////////////////////
// rgb(255,255,255)

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector(".nav__link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(randomColor(0, 255));
// });

// document.querySelector(".nav__links").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(randomColor(0, 255));
// });

// document.querySelector(".nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(randomColor(0, 255));
// });

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

const h1 = document.querySelector("h1");

// going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = "white"; // the first child
h1.lastElementChild.style.color = "orangered"; // the last child

// going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest(".header").style.background = "var(--gradient-secondary)";
h1.closest("h1").style.background = "var(--gradient-primary)";

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});

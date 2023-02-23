"use strict";
console.log("script.js is ready");
window.addEventListener("load", alder);

function alder() {
  let age = 80;

  if (age < 18) {
    child();
  } else if (age >= 72) {
    senior();
  } else {
    adult();
  }
}

function child() {
  console.log("Du er et barn");
  document.querySelector("#text").textContent = "Du er barn";
}

function adult() {
  console.log("Du er voksen");
  document.querySelector("#text").textContent = "Du er voksen";
}

function senior() {
    console.log("Du er pensionist");
      document.querySelector("#text").textContent = "Du er pensionist";

}

"use strict";

//INPUT FORMS
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
//ERROR TEXT
const dayErr = document.querySelector(".dayErr");
const monthErr = document.querySelector(".monthErr");
const yearErr = document.querySelector(".yearErr");
//DISPLAY ELEMENTS
const dayResult = document.querySelector(".day");
const monthResult = document.querySelector(".month");
const yearResult = document.querySelector(".year");
//
const submitArrow = document.querySelector(".arrow");
//
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentMonth = currentDate.getMonth() + 1;
let currentDay = currentDate.getDate();

let birthDate;
//
console.log(currentDate, dayErr);
//
//
//CODE
submitArrow.addEventListener("click", () => {
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  birthDate = new Date(`${month}/${day}/${year}`);

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  //
  const ageYear = currentYear - birthYear;
  yearResult.textContent = ageYear - 1;

  //
  if (birthMonth > currentMonth) {
    currentMonth = currentMonth + 12;
  }
  const ageMonth = currentMonth - birthMonth;
  monthResult.textContent = ageMonth;

  //
  if (birthDay > currentDay) {
    currentDay = currentDay + 30;
  }
  const ageDay = currentDay - birthDay;
  dayResult.textContent = ageDay;
});

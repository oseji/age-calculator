"use strict";

//INPUT FORMS
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
//ERROR TEXT
const dayErr = document.querySelector(".dayErr");
const monthErr = document.querySelector(".monthErr");
const yearErr = document.querySelector(".yearErr");
const dayInvalid = document.querySelector(".dayInvalid");
const monthInvalid = document.querySelector(".monthInvalid");
const yearInvalid = document.querySelector(".yearInvalid");
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
console.log(currentDate, dayErr, dayInput.value);
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

  //YEAR
  // const ageYear = currentYear - birthYear;
  // yearResult.textContent = ageYear - 1;

  //MONTH
  // if (birthMonth > currentMonth) {
  //   currentMonth = currentMonth + 12;
  // }
  // const ageMonth = currentMonth - birthMonth;
  // monthResult.textContent = ageMonth;

  //DAY
  // const currentMsPassed = currentDate.getTime();
  // const birthMsPassed = birthDate.getTime();
  // const msPassed = (currentMsPassed - birthMsPassed) / 86400000 / 365;
  // const msToYears = Number(`0.` + String(msPassed).split(".")[1]);
  // const months = msToYears * 12.008;
  // const days = Math.round(Number(`0.` + String(months).split(".")[1]) * 30.417);
  // dayResult.textContent = days;

  //DAY
  if (dayInput.value < 1 || dayInput.value > 31) {
    console.log("Invalid day input");
    //show invalid day text
    dayErr.classList.remove("closed");
  } else if ((dayInput.value = "")) {
    console.log("day input is empty");
    //show empty day text
    dayErr.classList.add("closed");
    dayInvalid.classList.remove("closed");
  } else {
    const currentMsPassed = currentDate.getTime();
    const birthMsPassed = birthDate.getTime();
    const msPassed = (currentMsPassed - birthMsPassed) / 86400000 / 365;
    const msToYears = Number(`0.` + String(msPassed).split(".")[1]);
    const months = msToYears * 12.008;
    const days = Math.round(
      Number(`0.` + String(months).split(".")[1]) * 30.417
    );
    dayResult.textContent = days;
    //reset error text
    dayErr.classList.add("closed");
    dayInvalid.classList.add("closed");
  }

  //MONTH
  if (monthInput.value < 1 || monthInput.value > 12) {
    console.log("Invalid month input");
    monthErr.classList.remove("closed");
  } else if ((monthInput.value = "")) {
    console.log("month input is empty");
    monthErr.classList.add("closed");
    monthInvalid.classList.remove("closed");
  } else {
    if (birthMonth > currentMonth) {
      currentMonth = currentMonth + 12;
    }
    const ageMonth = currentMonth - birthMonth;
    monthResult.textContent = ageMonth;
    //reset error text
    monthErr.classList.add("closed");
    monthInvalid.classList.add("closed");
  }

  //YEAR
  if (yearInput.value < 100 || yearInput.value > currentYear) {
    console.log("Invalid year input");
    yearErr.classList.remove("closed");
  } else if ((yearInput.value = "")) {
    console.log("Year input is empty");
    yearErr.classList.add("closed");
    yearInvalid.classList.remove("closed");
  } else {
    const ageYear = currentYear - birthYear;
    yearResult.textContent = ageYear - 1;
    //reset error text
    yearErr.classList.add("closed");
    yearInvalid.classList.add("closed");
  }

  //
  //
  // console.log(
  //   currentMsPassed,
  //   birthMsPassed,
  //   msPassed,
  //   msToYears,
  //   months,
  //   days
  // );
});

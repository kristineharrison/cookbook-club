const dinnerPast = document.querySelector(".dinner-past");
const dinnerCurrent = document.querySelector(".dinner-current");
const dinnerNext = document.querySelector("dinner-next");


//Dinner categories displayed on hover

dinnerPast.addEventListener("mouseover", function () {
    dinnerPast.innerHTML = '<h2>Past</h2>';
});

dinnerPast.addEventListener("mouseout", function () {
    dinnerPast.innerHTML = "";
});

dinnerCurrent.addEventListener("mouseover", function () {
    dinnerCurrent.innerHTML = '<h2>Current</h2>';
});

dinnerCurrent.addEventListener("mouseout", function () {
    dinnerCurrent.innerHTML = "";
});

dinnerNext.addEventListener("mouseover", function () {
    dinnerNext.innerHTML = '<h2>Next</h2>';
});

dinnerNext.addEventListener("mouseout", function () {
    dinnerNext.innerHTML = "";
});
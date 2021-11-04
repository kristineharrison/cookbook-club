const secondImage = document.querySelector(".second-img");
const thirdImage = document.querySelector(".third-img");
const fourthImage = document.querySelector(".fourth-img");


//Book names displayed on hover

secondImage.addEventListener("mouseenter", function () {
    secondImage.innerHTML = '<h2>Vietnamese Food Any Day</h2>';
});

secondImage.addEventListener("mouseleave", function () {
    secondImage.innerHTML = "";
});

thirdImage.addEventListener("mouseenter", function () {
    thirdImage.innerHTML = '<h2>Nopalito: A Mexican Kitchen</h2>';
});

thirdImage.addEventListener("mouseleave", function () {
    thirdImage.innerHTML = "";
});

fourthImage.addEventListener("mouseenter", function () {
    fourthImage.innerHTML = '<h2>Fortune Cookies</h2>';
});

fourthImage.addEventListener("mouseleave", function () {
    fourthImage.innerHTML = "";
});
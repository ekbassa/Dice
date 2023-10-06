
// select the container
const pageContainer = document.querySelector(".container");
const startBtn = document.getElementById("start-game");
const pageMain = document.querySelector("main");
const playersSection = document.querySelector('.players-container')


//attach  addEventListener to the button
startBtn.addEventListener("click", function (evt) {
  pageContainer.classList.add("hide-container");
  pageMain.classList.add("main");
playersSection.classList.remove('hidden');



});

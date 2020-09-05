let numberOfColors = 6;

let div = document.querySelectorAll(".square");

let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let colorDisplay = document.getElementById("bolded");

let decision = document.getElementById("message");
function randomColors(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    arr[i] = "rgb(" + r + ", " + g + ", " + b + ")";
  }
  return arr;
}
var color = randomColors(numberOfColors);
function colors(rightColor) {
  for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = rightColor;
  }
}

function pickColor(num) {
  let number = Math.floor(Math.random() * num);
  return color[number];
}
let pickedColor = pickColor(numberOfColors);
function gameLogic() {
  for (let i = 0; i < numberOfColors; i++) {
    div[i].style.backgroundColor = color[i];

    div[i].addEventListener("click", function () {
      let clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        decision.textContent = "Correct";
        colors(pickedColor);
        resetButton.textContent = "Play Again";
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        decision.textContent = "Try Again";
      }
    });
  }
}

resetButton.addEventListener("click", function () {
  color = randomColors(numberOfColors);

  pickedColor = pickColor(numberOfColors);

  colorDisplay.innerHTML = pickedColor;
  gameLogic();
  h1.style.backgroundColor = "#232323";
});
colorDisplay.innerHTML = pickedColor;

gameLogic();

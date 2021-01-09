import { display, score } from "./main.js";

// player image
export function changeImg(selection) {
  setTimeout(() => {
    switch (selection.name) {
      case "rock":
        display.children[0].children[0].src = `./img/1.png`;
        break;
      case "paper":
        display.children[0].children[0].src = `./img/2.png`;
        break;
      case "scissors":
        display.children[0].children[0].src = `./img/3.png`;
        break;
    }
    let comp = Math.floor(Math.random() * 3);
    // console.log(comp)
    display.children[1].children[0].src = `./img/${comp + 1}.png`;
    score(selection, comp);
  }, 1500);
}

// Add and Remove Animation
export function addAnimation() {
  display.children[0].classList.add("animation-box");
  display.children[1].classList.add("animation-box");
}

export function removeAnimation() {
  Array.from(display.children).forEach((child) => {
    child.children[0].src = `./img/1.png`;
    child.classList.remove("animation-box");
  });

  void display.children[0].offsetWidth;
  void display.children[1].offsetWidth;
}

// adding score to the dom
export function addScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}

const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
const body = document.body

body.addEventListener("keydown", (event) => {
  if (event.key === codes[index]) { 
    index++;
      if (index === codes.length) {
        alert("Congrats!");
      }
  } else {
    index = 0;
  }
});
}

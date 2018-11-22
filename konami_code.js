const body = document.body;
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
  body.addEventListener("keydown", (e)=> {
    const key = e.key;
    if(key === codes[index]){
      index++; 
      if(index === codes.length){
        alert("Super sick brahhhhhhhh!!!!!!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  )
};

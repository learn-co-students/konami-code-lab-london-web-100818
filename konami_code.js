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

let tracker = [];
let index = 0;
const body = document.querySelector('body')


function init() {

  body.addEventListener('keydown', function(e){
        if (e.key === codes[index]){
  					index++;
  				if (index === codes.length){
  						alert('winner')
              index = 0;
  			}
  		}else {
  			index = 0;
  		}


  })

}



// const input = document.querySelector('input');
//
// input.addEventListener('keydown', function(e) {
//   console.log(e.which);
// });

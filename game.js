/* Size of the drawing screen*/
const default_size = 600;

//  FRAME OBJECT CONSTANTS

//grid container
const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
let row = document.querySelector('.row');

function setSize(n) {
  let new_size = n.toString() + "px";
  document.getElementById('container').style.height = new_size;
  document.getElementById('grid-container').style.height = new_size;
  document.getElementById('grid-container').style.width = new_size;
  let row = document.querySelectorAll('.row');
  row.forEach(function (r) {
    r.style.width = new_size;
  })

}

// side-bar container
const sideBarContainer = document.querySelector('#side-bar');

//restart button
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', reset);

//resize button
const resizeBtn = document.querySelector('#resize');
resizeBtn.addEventListener('click', showResizePopup);

//make grid button
const makeGridBtn = document.querySelector('#make-grid');
makeGridBtn.addEventListener('click', () => {
  let input = document.getElementById("grid-size").value;
  if (parseInt(input) != NaN) {
    while (gridContainer.firstChild) {
      gridContainer.removeChild(gridContainer.lastChild);
    }
    resizePopup.classList.remove("show");
    makeGrid(parseInt(input));
  } else {

  }
})

//resize popup
const resizePopup = document.querySelector('#resizePopup')

function showResizePopup() {
  resizePopup.classList.add("show");
}
const closePopup = document.querySelector('#closePopup');
closePopup.addEventListener("click", function () {
  resizePopup.classList.remove("show");
})

window.addEventListener("click", function (event) {
  if (event.target == resizePopup) {
    resizePopup.classList.remove("show");
  }
})

/* SETUP*/
function setup() {
  makeGrid(16);
  row = document.querySelector('.row');
  setSize(default_size);
}

/* [makeGrid (n)] makes an n x n grid of pixels with 
    dimensions of default_size pixels.*/
function makeGrid(n) {

  for (var i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (var j = 0; j < n; j++) {
      const box = document.createElement('div');
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
      });
      let size = default_size / n / 2;
      let string = size.toString() + "px";
      console.log(string)
      box.style.padding = string;
      box.classList.add('pixel');
      row.appendChild(box);
    }
    gridContainer.appendChild(row);
  }
}

function reset() {
  let boxes = document.querySelectorAll('.pixel')
  boxes.forEach(function (current) {
    current.style.backgroundColor = "white";
  });
  setSize(default_size);
}


/* Size of the drawing screen*/
let size = 350;
let borderSize = 1;
let gridDim = 16;
let isgridOn = true;
//  FRAME OBJECT CONSTANTS

//grid container
const container = document.querySelector('#container');
const gridContainer = document.querySelector('#grid-container');
let row = document.querySelector('.row');

function setSize(n) {
  let size = n;
  let new_size = n.toString() + "px";
  document.getElementById('container').style.height = new_size;
  document.getElementById('grid-container').style.height = new_size;
  document.getElementById('grid-container').style.width = new_size;
  let row = document.querySelectorAll('.row');
  row.forEach(function (r) {
    r.style.width = new_size;
  })
}
//slider
const slider = document.getElementById("size-slider");
const sliderValue = document.getElementById("sliderValue");
slider.addEventListener('click', () => {
  sliderValue.textContent = slider.value;
  size = slider.value;
  makeGrid(gridDim);
  setSize(slider.value);
})
// side-bar container
const sideBarContainer = document.querySelector('#side-bar');

//restart button
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', reset);

//resize button
const resizeBtn = document.querySelector('#resize');
resizeBtn.addEventListener('click', showResizePopup);

//show-grid button

const showGridBtn = document.querySelector('#show-grid');
showGridBtn.addEventListener('click', () => {
  if (isgridOn === true) {
    gridOff();
    showGridBtn.textContent = "Grid On";
    isgridOn = false;
  } else if (isgridOn === false) {
    gridOn();
    showGridBtn.textContent = "Grid Off";
    isgridOn = true;
  }
}


)
//make grid button
const makeGridBtn = document.querySelector('#make-grid');
makeGridBtn.addEventListener('click', () => {
  let input = document.getElementById("popup-input").value;
  if (parseInt(input) != NaN) {
    resizePopup.classList.remove("show");
    makeGrid(parseInt(input));
    gridDim = parseInt(input);
    reset();
  } else {

  }
})

//resize popup
const resizePopup = document.querySelector('#resizePopup')

function showResizePopup() {
  resizePopup.classList.add("show");
  resizePopup.style.display = "flex";
}
const closePopup = document.querySelector('#closePopup');
closePopup.addEventListener("click", function () {
  resizePopup.classList.remove("show");
  resizePopup.style.display = "none";
})

window.addEventListener("click", function (event) {
  if (event.target == resizePopup) {
    resizePopup.classList.remove("show");
  }
})

/* SETUP*/
function setup() {
  makeGrid(gridDim);
  row = document.querySelector('.row');
  setSize(size);
}

/* [makeGrid (n)] makes an n x n grid of pixels with 
    dimensions of size pixels.*/
function makeGrid(n) {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
  for (var i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (var j = 0; j < n; j++) {
      const box = document.createElement('div');
      box.style.borderWidth = borderSize.toString() + "px";
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
      });
      let s = (size - borderSize * (2 * n)) / n / 2;
      let string = s.toString() + "px";
      console.log(string);
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
    current.style.borderWidth = borderSize.toString() + "px";
  });
  setSize(size);
}
function gridOn() {
  borderSize = 1;

  makeGrid(gridDim);
  reset();
}

function gridOff() {
  borderSize = 0;

  makeGrid(gridDim);
  reset();
}
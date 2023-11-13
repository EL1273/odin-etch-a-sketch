const container = document.querySelector('#container');
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', reset);

function setup() {
  makeGrid(16);
}

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

const resizeBtn = document.querySelector('#resize');
resizeBtn.addEventListener('click', showResizePopup);

const makeGridBtn = document.querySelector('#make-grid');
makeGridBtn.addEventListener('click', () => {
  let input = document.getElementById("grid-size").value;
  if (parseInt(input) != NaN) {
    while (container.firstChild) {
      container.removeChild(container.lastChild);
    }
    resizePopup.classList.remove("show");
    makeGrid(parseInt(input));
  } else {

  }
})

function makeGrid(n) {

  for (var i = 0; i < n; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (var j = 0; j < n; j++) {
      const box = document.createElement('div');
      box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
      });
      let size = 600 / n / 2;
      let string = size.toString() + "px";
      console.log(string)
      box.style.padding = string;
      box.classList.add('pixel');
      row.appendChild(box);
    }
    container.appendChild(row);
  }
}

function reset() {
  let boxes = document.querySelectorAll('.pixel')
  boxes.forEach(function (current) {
    current.style.backgroundColor = "white";
  });
}


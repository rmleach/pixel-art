const pixelCanvas = document.querySelector('.canvas')

const makeGrid = () => {
  for(let i = 1; i <= 25; i++){
    let gridRow = document.createElement('tr');
    pixelCanvas.appendChild(gridRow);
    for (let j = 1; j <= 25; j++) {
      let gridCell = document.createElement('td');
      gridRow.appendChild(gridCell);
    }
  }
}

const colorPicker = () => {
  let input = document.querySelector("input")
  for(let i = 1; i < input.lenght; i++){
    input[i].addEventlistener("input", () =>{
      red = document.querySelector("red").value,
      green = document.querySelector("green").value,
      blue = document.querySelector("blue").value 
      display = document.querySelector("display")
      console.log(display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")")

    })
  }
}

makeGrid()
colorPicker()


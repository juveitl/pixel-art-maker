// Select table and "submit" area
const canvas = document.querySelector('#pixelCanvas');

const sizeForm = document.querySelector('#sizePicker');

// When size is submitted by the user, call makeGrid()
sizeForm.addEventListener("submit", makeGrid);


var table = document.getElementById("pixelCanvas");

//Create function to create grid
function makeGrid(event) {

	event.preventDefault();

//Reverse table created in order to create new table
	document.getElementById("pixelCanvas").innerHTML = "";

//Query for selected height and width values
	const height = document.querySelector("#inputHeight").value;
	const width = document.querySelector('#inputWidth').value;

//For loops in order to create grid (rows and columns)
	for (var x = 0; x < height; x++){

		let row = table.insertRow(x);
		
		for (var i = 0; i < width; i++){
			let cell = row.insertCell(i);

//Coloring grids and making it able to change towards new color ones selected
			cell.addEventListener("click", function() {
				let color = document.querySelector('#colorPicker').value;
				cell.style.backgroundColor = color;
			});

		}
	}
//Checking parameters
	console.log(document.querySelector('#colorPicker').value);

}
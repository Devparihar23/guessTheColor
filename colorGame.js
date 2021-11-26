var numofSquare=6;
var color=generateRandomColor(numofSquare);

var square=document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1=document.getElementById("h1");
var resetButton=document.querySelector("#reset");
var hardButton=document.querySelector("#hard");
var easyButton=document.querySelector("#easy");

colorDisplay.textContent= pickedColor;

for(var i=0;i<square.length;i++){
	square[i].style.backgroundColor= color[i];

	square[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor;
		resetButton.textContent="Play Again?"		

		if(clickedcolor === pickedColor){
			messageDisplay.textContent = "correct!!"
			changeColor(clickedcolor);
			h1.style.backgroundColor=clickedcolor;
			

		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent = "Try Again!"
		}
	})
};

function changeColor(color){
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor = color;
	}
};

function pickColor() {
	return color[Math.floor(Math.random()*color.length)];
}

function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	return arr;
} 

function randomColor(){
	var r= Math.floor(Math.random()*256);
	var g= Math.floor(Math.random()*256);
	var b= Math.floor(Math.random()*256);

	return ("rgb("+ r + ", "+ g + ", "+ b + ")");
}

resetButton.addEventListener("click",function(){
	color=generateRandomColor(numofSquare);
	pickedColor=pickColor();
	colorDisplay.textContent= pickedColor;

	for (var i = 0; i<numofSquare;i++){
		square[i].style.backgroundColor=color[i];
	}
	messageDisplay.textContent="";
	
});

easyButton.addEventListener("click",function(){
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	numofSquare=3;
	color=generateRandomColor(numofSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		if(color[i]){
		square[i].style.backgroundColor=color[i];
		}else{
			square[i].style.display="none";
		}
	}

})


hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");

	numofSquare=6;
	color=generateRandomColor(numofSquare);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color[i];
		square[i].style.display="block";
	}
	
})

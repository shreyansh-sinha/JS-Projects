const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() 
{
	const RandomNumber = getRandom();
	document.body.style.backgroundColor = colors[RandomNumber];
	color.textContent = colors[RandomNumber]
})

function getRandom()
{
	return parseInt(Math.random()*colors.length);
}
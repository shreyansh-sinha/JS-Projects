const colors = [1, 2, 3, 4, 5, 6, 'A', 'B', 'C','D', 'E', 'F'];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() 
{
	var disp_color = '#';
	for(let i=0;i<6;i++)
	{
		const RandomNumber = getRandom();
		disp_color += colors[RandomNumber];

	}
	
	console.log(disp_color);
	document.body.style.backgroundColor = disp_color;
	color.textContent = disp_color;
})

function getRandom()
{
	return parseInt(Math.random()*colors.length);
}
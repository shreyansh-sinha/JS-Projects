let count = 0;


const value = document.querySelector('#value');

const btns = document.querySelectorAll('.btn');

btns.forEach(function(btn) 
{
	btn.addEventListener('click', function(e) {
		const styles = e.currentTarget.classList;
		
		if(styles.contains('btn1'))
		{
			count++;
		}
		else if(styles.contains('btn2'))
		{
			count = 0;
		}
		else
		{
			count--;
		}

		

		if(count > 0) {
			value.style.color = 'green';
			
		}
		if(count < 0)
		{
			value.style.color = 'red';
		}

		if(count == 0)
		{
			value.style.color = 'black';
			console.log(value.style.color);
		}

		value.textContent = count;
	});
});
function buttonClick(button)
{
	var tb3 = document.getElementById("print");
	
	var val= button.value;
	if(val == 'AC')
	{
		tb3.value='';
	}else
	{
		tb3.value=val;
	}
}


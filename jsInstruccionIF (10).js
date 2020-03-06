function mostrar()
{
	
	
	var num ;

	num = Math.floor(Math.random()*(10 + 1) -1) + 1;


	if(num == 9 || num == 10)
	{

		aler(num + " Exelente");

	}else if(edad >= 4 )
	{

		aler(num + " Aprobaste");
	
	}else
	{
		aler( num + " Intentalo la proxima");

	}


}
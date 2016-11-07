function añadirTarea(){
	
	var contenido=document.getElementById('auto').value;
	var div1=document.createElement('div');
	div1.classList.add("row");
	
	
	var checkIn=document.createElement('input');
	
	checkIn.setAttribute("type", "checkbox");
	checkIn.classList.add("col-xs-1","col-sm-1","col-md-1");

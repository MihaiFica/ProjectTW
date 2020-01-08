	function verEmailAb()  //Testez input-ul de la Email
	{
		var prob = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/; 
		var iem = document.getElementsByClassName ("InputEmail")[0].value;
		var ok = prob.test (iem);
		return ok;
	}
		
	function verNumeAb()   //Testez input-ul de la Nume
	{ 
		var prob = /^([a-zA-Z]{3,})$/; 
		var inum = document.getElementsByClassName ("InputNume")[0].value;
		var ok = prob.test (inum);
		return ok;
	}
		
	function loadDoc() 
	{
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) 
		{
			 var inf = JSON.parse (this.responseText);  //extrag obiectele intr-un vector
			 var ok = 1;
			 for (i = 0 ; i < inf.length ; i++)   //iau fiecare obiect pe rand 
			 {
				 if ( inf[i].email == document.getElementById ("InputEmail").value ) //verific daca mail-ul din obiect se potriveste cu mail-ul di input
				 {
				  ok = 0;
				 }	 
			 }
		
			if ( ok == 1 && verEmailAb() != false && verNumeAb() != false ) //daca emailul se potriveste cu unul dintr-un obiect 
			{                                                               //si informatiile au o forma corecta
				 setTimeout ( function() { Swal.fire ( {                    //afisez mesaj de operatie reusita
						                    icon: 'success',
						                    title: 'Abonat cu succes!' } ) } , 2000 ); 
			}
			else
			{
				 setTimeout ( function() { Swal.fire ( {
						                    icon: 'error',                  //afisez mesaj de eroare
						                    title: 'Email-ul este deja folosit sau datele sunt incorecte!' } ) } , 2000 ); 
				   
			
			if ( verEmailAb() == false )                                    //evidentiez input stergand tot din el
			{
				document.getElementsByClassName ("InputEmail")[0].value = "";
			}	
			if ( verNumeAb() == false )                                     //evidentiez input stergand tot din el
			{
				document.getElementsByClassName ("InputNume")[0].value = "";
			}
			}			
				 
		}};
	  xhttp.open("GET","https://jsonplaceholder.typicode.com/users" , true);
	  xhttp.send();
	}
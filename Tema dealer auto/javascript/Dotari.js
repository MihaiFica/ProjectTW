function dotari( nume, firma, pret, cum)  //constructor 
{
	this.nume = nume;
	this.firma = firma;
	this.pret = pret;
	this.afisareDot = afisareDot;
	this.afisareCos = afisareCos;
}
function afisareCos()               //functie de afisare obiecte in cos
{
var inp = document.createElement ("div");
inp.className = "cosul";
var element = document.getElementsByClassName ("cos")[0];
element.appendChild(inp);

var inp2 = document.createTextNode (this.nume + " - " + this.firma + " - " + this.pret + " E ");
inp.appendChild (inp2);
}

function afisareDot()       //functie de afisat obiecte in lista        
{
var inp = document.createElement ("div");
inp.className = "obiect";
var element = document.getElementById ("produse");
element.appendChild (inp);

var inp1 = document.createElement ("input");
inp1.type = "Checkbox";
inp1.className = "inpCheckbox";
inp1.onclick = verCheckbox;
inp.appendChild (inp1);

var inp2 = document.createTextNode ("Categorie : " + this.nume + " , Firma : " + this.firma + " , Pret : " + this.pret + " E ");
inp.appendChild (inp2);

var inp3 = document.createElement ("span");
inp3.className = "text";
inp3.innerHTML = this.nume;
inp.appendChild (inp3);
inp3.style.display = "none";

var inp4 = document.createElement ("span");
inp4.className = "text";
inp4.innerHTML = this.firma;
inp.appendChild (inp4);
inp4.style.display = "none";

var inp5 = document.createElement ("span");
inp5.className = "text";
inp5.innerHTML = this.pret;
inp.appendChild (inp5);
inp5.style.display = "none";
}

function stergereDot()      //functie pentru a sterge obiecte din lista
{
	var vecSter = document.getElementById ("produse").getElementsByTagName ("div");
	var len = vecSter.length;
	for ( i = 0 ; i < len ; i++ )
    {	
        var obj = document.getElementsByClassName ("obiect")[0];
		obj.parentNode.removeChild (obj);
    }
}

function stergereCos()       //functie de sters obiecte din cos
{
	var vecSter = document.getElementsByClassName ("cos")[0].getElementsByTagName ("div");
	var len = vecSter.length;
	for ( i = 0 ; i < len ; i++ )
    {	
        var obj = document.getElementsByClassName ("cosul")[0];
		obj.parentNode.removeChild (obj);
    }
}

var cos=new Array;
	
function verCheckbox()    //functie de selectori
{
	var sum = 0;
	var cat = this.parentNode.getElementsByClassName ("text")[0].innerHTML;
	var fir = this.parentNode.getElementsByClassName ("text")[1].innerHTML;
	var prt = parseFloat(this.parentNode.getElementsByClassName ("text")[2].innerHTML);
	if ( this.checked === true )
	{
		
		if ( cos.length == 0 )
		{
		var obj = new dotari(cat, fir, prt);
		cos.push(obj);
		}
		else
		{
			var ok = 0;
			for ( i = 0 ; i < cos.length ; i++ )
	       {
	        if ( cos[i].pret == prt )
			{
			   ok = 1;		   
			}
		   }
		   if ( ok == 0 )
		   {
			   var obj = new dotari(cat, fir, prt);
		       cos.push(obj);
		   }
		}
	}
	else
	{
		for ( i = 0 ; i < cos.length ; i++ )
	       {
	        if ( cos[i].nume == cat && cos[i].firma == fir && cos[i].pret == prt )
	          {
		         var out=cos.splice(i,1);
				 break;
	          }
	       }
	}
	
	stergereCos();    
	for ( i = 0 ; i < cos.length ; i++ )
	{
		cos[i].afisareCos();
	}
	 for ( i = 0 ; i < cos.length ; i++ )
	{
		sum = Math.round( ( sum + cos[i].pret * ( 4.5 + (Math.random() * 0.0001 ) ) )*100) / 100;
	}
	stgPret();
	afisPret(sum);
}

function afisPret(sum)  //functie pentru afisare pret total
{
	var inp = document.createElement ("span");
    inp.className = "pr";
    var element = document.getElementsByClassName ("cos")[0];
    element.appendChild (inp);
    var inp2 = document.createTextNode ("Pret: " + sum + " lei");
    inp.appendChild (inp2);
}
function stgPret()    //functie pentru a sterge vechiul pret
{
	var vecSter = document.getElementsByClassName ("cos")[0].getElementsByTagName ("span");
	var len = vecSter.length;
	for ( i = 0 ; i < len ; i++ )
    {	
        var obj=document.getElementsByClassName ("pr")[0];
		obj.parentNode.removeChild (obj);
    }
}

function obtiuni()   //functie pentru a scala butonul pentru obtiuni
{
	if(document.getElementsByTagName ("Button")[1].value == "false")
	{
	   document.getElementsByTagName ("Button")[1].value = "true";
	   document.getElementsByClassName ("obtiuni")[0].style.display = "none";
	}
	else
	{ 
		document.getElementsByTagName ("Button")[1].value = "false";
		document.getElementsByClassName ("obtiuni")[0].style.display = "";	
	}
}
function cosCump()  //functie pentru a scala butonul pentru cos
{
	if ( document.getElementsByTagName ("Button")[0].value == "false" )
	{
	   document.getElementsByTagName ("Button")[0].value = "true";
	   document.getElementsByClassName ("cos")[0].style.display = "none";
	}
	else
	{ 
		document.getElementsByTagName ("Button")[0].value = "false";
		document.getElementsByClassName ("cos")[0].style.display = "";	
	}
}
	
function lista() //functie pentru creare sortare si afisare lista
{
	stergereDot();
    var aux = new Array;
    aux.push(new dotari("frane", "Brembo", "100"));
    aux.push(new dotari("frane", "Ferodo", "70"));
    aux.push(new dotari("frane", "Bosch", "120"));
    aux.push(new dotari("sistem audio", "Harman Kardon", "400"));
    aux.push(new dotari("sistem audio", "B&O", "500"));
    aux.push(new dotari("sistem audio", "Bose", "300"));
    aux.push(new dotari("faruri", "Aska", "150"));
    aux.push(new dotari("faruri", "Bedford", "250"));
    aux.push(new dotari("faruri", "Buik", "170"));
	var cat = document.getElementById ("categorie").value;
	var fir = document.getElementById ("firma").value;
	var pretMin = parseInt (document.getElementById ("pretMin").value);
	var pretMax = parseInt (document.getElementById ("pretMax").value);
	
	for ( i = 0 ; i < aux.length ; i++ )
	{
	  if ( cat != "nimic" && aux[i].nume != cat )
	  {
		var del = aux.splice(i,1);
		i = i - 1;
	  }
	}
	for ( i = 0 ; i < aux.length ; i++ )
	{
	  if ( fir != "nimic" && aux[i].firma != fir )
	  {
		var del = aux.splice(i,1);
		i = i - 1;
	  }
	}
	
	for ( i = 0 ; i < aux.length ; i++ )
	{
	  if ( pretMin != "nimic" && pretMax != "nimic" && aux[i].pret < pretMin && aux[i].pret > pretMax )
	  {
		var del = aux.splice(i,1);
		i = i - 1;
	  }
	}
	
	for ( i = 0 ; i < aux.length ; i++ )
	{
	  if ( pretMax != "nimic" && aux[i].pret > pretMax )
	  {
		var del = aux.splice(i,1);
		i = i - 1;
	  }
	}
	
	for ( i = 0 ; i < aux.length ; i++ )
	{
	  if ( pretMin != "nimic" && aux[i].pret < pretMin )
	  {
		var del = aux.splice(i,1);
		i = i - 1;
	  }
	}
	for ( i = 0 ; i < aux.length ; i++ )
	{
		aux[i].afisareDot();
	}
}
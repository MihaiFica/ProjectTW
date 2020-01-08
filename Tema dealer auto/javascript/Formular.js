//Nume si input Utilizator

var inp = document.createElement ("input");
inp.type = "Text";
inp.className = "inpNume";
inp.placeholder = "ex : Marin";
inp.style.fontSize = "0.9em";
inp.style.color = "gray";
var element = document.getElementById ("Nume");
element.appendChild (inp);

//Prenume si input Utilizator
var inp = document.createElement ("input");
inp.type = "Text";
inp.className = "inpPrenume";
inp.placeholder = "ex : Liviu";
inp.style.fontSize = "0.9em";
inp.style.color = "gray";
var element = document.getElementById ("Prenume");
element.appendChild (inp);

//Email si input Utilizator
var inp = document.createElement ("input");
inp.type = "Text";
inp.className = "inpEmail";
inp.placeholder = "marin.liviu@yahoo.com";
inp.style.fontSize = "0.9em";
inp.style.color = "gray";
var element = document.getElementById ("Email");
element.appendChild (inp);

//Parola si input Utilizator
var inp = document.createElement ("input");
inp.type = "password";
inp.className = "inpParola";
inp.style.fontSize = "0.9em";
inp.style.color = "gray";
var element = document.getElementById ("Cod");
element.appendChild (inp);

//Select si input Utilizator
var inp = document.createElement ("select");
inp.className = "inpSelect";
inp.style.fontSize = "0.9em";
inp.style.color = "gray";
var element = document.getElementById ("Model");
element.appendChild (inp);

//-ob1 Audi A4
var inp1 = document.createElement ("option");
inp1.text = "Audi A4";
inp1.value = "Audi A4";
inp.add (inp1);

//-ob2 Audi A5
var inp2 = document.createElement("option");
inp2.text = "Audi A5";
inp2.value = "Audi A5";
inp.add (inp2);

//-ob3 Audi A6
var inp3 = document.createElement ("option");
inp3.text = "Audi A6";
inp3.value = "Audi A6";
inp.add (inp3);

//-ob4 Audi A7
var inp4 = document.createElement ("option");
inp4.text = "Audi A7";
inp4.value = "Audi A7";
inp.add (inp4);

//Range input
var inp = document.createElement ("input");
inp.className = "inpRange";
inp.type = "Range";
inp.min = "1990";
inp.max = "2020";
inp.value = "2005";
var element = document.getElementById ("An");
element.appendChild (inp);

var inpCur = document.getElementById ("ValAn");
inpCur.innerHTML = "* An de fabricatie : " + inp.value; 

inp.oninput = function() 
{
  inpCur.innerHTML = "* An de fabricatie : " + this.value;
}

//checkbox
var inp = document.createElement ("input");
inp.type = "Checkbox";
inp.id = "inpCheckbox";
inp.onclick = verCheckboxAb;
var inp1 = document.createTextNode ("Termeni si conditii")
var element = document.getElementById ("Termeni");
element.appendChild (inp);
element.appendChild (inp1);

//radio button input
//button 1-Masculin
var inp = document.createElement ("input");
var com = document.createTextNode (" Masculin ");
inp.type = "Radio";
inp.className = "inpRadio1";
var element = document.getElementById ("Gen");
element.appendChild (inp);
element.appendChild (com);

//button 1-Feminin
var inp1 = document.createElement ("input");
var com1 = document.createTextNode (" Feminin");
inp1.type="Radio";
inp1.className="inpRadio2";
var element = document.getElementById  ("Gen");
element.appendChild (inp1);
element.appendChild (com1);

//audio
var muzica = document.createElement ("audio");
var sur = document.getElementById ("muzica");
var sursa = document.createElement ("source");
sursa.src = "C:\\Users\\X-MAN\\Desktop\\Tema dealer auto\\m.mp3";
sur.type = "audio/mpeg";
muzica.controls = true;
sur.appendChild (muzica);
muzica.appendChild (sursa);

//video
var video = document.createElement ("video");
var vid = document.getElementById ("video");
var sursa = document.createElement ("source");
sursa.src = "C:\\Users\\X-MAN\\Desktop\\Tema dealer auto\\da.mp4";
vid.type = "video/mpeg";
video.controls = true;
video.width = "420";
video.height = "250";
vid.appendChild (video);
video.appendChild (sursa);
             
//verific numele
function verNume()
{
	var prob = /^([a-zA-Z]{3,})$/; 
	var inum = document.getElementsByClassName ("inpNume")[0].value;
	var ok = prob.test(inum);
	return ok;
}
//verific prenumele
function verPrenume()
{
	var prob = /^([a-zA-Z]{3,})$/; 
	var ipre = document.getElementsByClassName ("inpPrenume")[0].value;
	var ok = prob.test (ipre);
	return ok;
}
//verific email
function verEmail()
{
	var prob=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})$/; 
	var iem=document.getElementsByClassName("inpEmail")[0].value;
	var ok=prob.test(iem);
	return ok;
}
//verific cod
function verCod()
{
	var prob = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/; 
	var icod = document.getElementsByClassName("inpParola")[0].value;
	var ok = prob.test (icod);
	return ok;
}

function verCheckboxAb()
{
	return  document.getElementById ("inpCheckbox").checked;
}

function load()   //functie ce se apeleaza cand apesi "trimite"
{
	if ( verNume() == false )
	{
		document.getElementsByClassName ("inpNume")[0].value = " ";
	}
	if ( verPrenume() == false )
	{
		document.getElementsByClassName ("inpPrenume")[0].value = " ";
	}
	if ( verEmail() == false )
	{
		document.getElementsByClassName ("inpEmail")[0].value = " ";
	}
	if ( verCod() == false )
	{
		document.getElementsByClassName ("inpParola")[0].value = "";
	}
	if(verNume() != false && verPrenume() != false && verEmail() != false && verCod() != false) 
	{
		Swal.fire(
                   '',
                   'Mesajul a fost trimis cu succes!',
                   'success'
                 )
	}
	else
	{
		Swal.fire({
                    icon: 'error',
                    title: 'Mesajul nu a fost trimis!',
                    text: 'Aruncati o privire asupra campurilor goale'
                  })
	}
}
var ciclu=setInterval (function () {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;}, 2000);

window.onkeyup=function(event){   //opresc derularea culorilor
	 if(event.keyCode == 13) {
		 clearInterval(ciclu);
	 }
}










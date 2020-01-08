document.getElementsByTagName ("Button")[0].style.backgroundColor = "white"; // backgroud-ul pentru buton alb

//setari input type:range
var inp = document.createElement ("input");
inp.id = "inpRange";
inp.type = "Range";
inp.min = "1";
inp.max = "100";
inp.value = "50";
var element = document.getElementById ("varsta1");
element.appendChild (inp);
var inpCur = document.getElementById ("varsta");
inpCur.innerHTML = "Varsta : " + inp.value + " ani"; 

inp.oninput = function() 
{
  inpCur.innerHTML = "Varsta : " + this.value +" ani";
}

function blockVarsta() //blocheaza videoclipul daca selectezi varsta sub 18 ani
{
	if ( document.getElementById ("buton").value == "false" )
	{
		document.getElementById ("buton").style.display = "none";
		document.getElementById ("inpRange").style.display = "none";
		if ( document.getElementById ("inpRange").value < 18 )
	    {
		document.getElementById ("da").addEventListener ("click", function(event){
        event.preventDefault();});
	    }
	}
}

function setari() //setari
{
	if ( document.getElementsByTagName ("Button")[0].value == "false" )
	{
	   document.getElementsByTagName ("Button")[0].value = "true";
	   document.getElementsByClassName ("setari")[0].style.display = "none";
	}
	else
	{ 
		document.getElementsByTagName ("Button")[0].value = "false";
		document.getElementsByClassName ("setari")[0].style.display = "";	
	}
}
function switchCuloare() //functia de schimbare culoare
{
	
	switch ( document.getElementsByClassName ("culoare")[0].value ) 
	{
        case "gri" :
            document.body.style.backgroundColor = "#f2f2f2";
            break;
        case "rosu" :
            document.body.style.backgroundColor = "#ffcccc";
            break;
        case "alb":
            document.body.style.backgroundColor = "#FFFFFF";
            break;
        case "galben":
            document.body.style.backgroundColor = "#ffffcc";
            break;
    }
}
function switchMarime() //functie de schimbat marimea scrisului
{
	for ( i = 0 ; i <= 5 ; i++ )
	{
	    switch ( document.getElementsByClassName ("marime")[0].value) 
	    {
            case "mic":
                document.getElementsByClassName ("Paragraf")[i].style.fontSize = "1em";
                break;
            case "mediu":
                document.getElementsByClassName ("Paragraf")[i].style.fontSize = "1.1em";
                break;
            case "mare":
                document.getElementsByClassName ("Paragraf")[i].style.fontSize = "1.2em";
                break; 
        }
	}
}
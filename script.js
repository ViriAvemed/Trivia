
function one() {	
	let name= document.getElementById("id_name").value
	 document.getElementById("playerName").innerHTML=name;
	 document.getElementById("first_Screen").className = "invisible";
	 document.getElementById("second_Screen").className = "visible";
	 document.getElementById("id_name").value = "";
  }
 document.getElementById("id_acccept").addEventListener("click",one);
 
 
 
 function two (){
	 document.getElementById("second_Screen").className = "invisible";
	 document.getElementById("thrirt_Screen").className = "visible";
 }
 document.getElementById("id_start").addEventListener("click",two);
 
 <!--Funciones para ir a las preguntas de Marvel-->
 function three (){
	 document.getElementById("thrirt_Screen").className = "invisible";
	 document.getElementById("fourth_Screen").className = "visible";
	 document.getElementById("tenth_Screen").className = "invisible";
 }
 document.getElementById("id_marvel").addEventListener("click",three);
 document.getElementById("id_vmarvel").addEventListener("click",three);
 
 function four (){
	 document.getElementById("fourth_Screen").className = "invisible";
	 document.getElementById("fifth_Screen").className = "visible";
 }
 
 document.getElementById("id_nextM1").addEventListener("click", four);
 
 function five (){
	 document.getElementById("fifth_Screen").className = "invisible";
	 document.getElementById("sixth_Screen").className = "visible";
 }
 
 document.getElementById("id_nextM2").addEventListener("click", five);
 
 function six (){
	 document.getElementById("sixth_Screen").className = "invisible";
	 document.getElementById("tenth_Screen").className = "visible";
	 obtenerMarvel()
 }
 document.getElementById("id_FinishM").addEventListener("click", six);
 
 <!--Funciones para ir a las preguntas de Disney-->
 function seven (){
	 document.getElementById("thrirt_Screen").className = "invisible";
	 document.getElementById("seventh_Screen").className = "visible";
	 document.getElementById("tenth_Screen").className = "invisible";
 }
 document.getElementById("id_disney").addEventListener("click", seven);
 document.getElementById("id_vdisney").addEventListener("click", seven);
 
 function eigth (){
	 document.getElementById("seventh_Screen").className = "invisible";
	 document.getElementById("eighth_Screen").className = "visible";
 }
 document.getElementById("id_nextD1").addEventListener("click", eigth);
 
 function nine (){
	 document.getElementById("eighth_Screen").className = "invisible";
	 document.getElementById("ninth_Screen").className = "visible";
 }
 
 document.getElementById("id_nextD2").addEventListener("click", nine);
 
 function ten (){
	 document.getElementById("ninth_Screen").className = "invisible";
	 document.getElementById("tenth_Screen").className = "visible";
	 obtenerDisney()
 }
 document.getElementById("id_FinishD").addEventListener("click", ten);
 
 function twelve (){
	 document.getElementById("tenth_Screen").className = "invisible";
	 document.getElementById("first_Screen").className = "visible";
	 
 }
 document.getElementById("id_home").addEventListener("click", twelve);
 
 function obtenerMarvel(){
	 let resp1=0;
	 let resp2=0;
	 let resp3=0;
	 if(document.querySelector('input[name="pregunta1"]:checked')!==null){
		 resp1 = Number(document.querySelector('input[name="pregunta1"]:checked').value);	
		 document.querySelector('input[name="pregunta1"]:checked').checked = "";	
	 }	
	 if(document.querySelector('input[name="pregunta2"]:checked')!==null){		
		 resp2 = Number(document.querySelector('input[name="pregunta2"]:checked').value);
		 document.querySelector('input[name="pregunta2"]:checked').checked = "";
	 }	
	 if(document.querySelector('input[name="pregunta3"]:checked')!==null){
		 resp3 = Number(document.querySelector('input[name="pregunta3"]:checked').value);	
		 document.querySelector('input[name="pregunta3"]:checked').checked = "";	
	 }	
	 
	 let correctas=resp1+resp2+resp3;
	 document.getElementById("correctas").innerHTML=correctas;
	 document.getElementById("incorrectas").innerHTML=3-correctas;
 
 }
 
 
 function obtenerDisney(){
	 let resp1=0;
	 let resp2=0;
	 let resp3=0;
	 if(document.querySelector('input[name="preguntaD1"]:checked')!==null){
		 resp1 = Number(document.querySelector('input[name="preguntaD1"]:checked').value);	
		 document.querySelector('input[name="preguntaD1"]:checked').checked = false;	
	 }	
	 if(document.querySelector('input[name="preguntD2"]:checked')!==null){		
		 resp2 = Number(document.querySelector('input[name="preguntD2"]:checked').value);
		 document.querySelector('input[name="preguntD2"]:checked').checked = false;
	 }	
	 if(document.querySelector('input[name="preguntaD3"]:checked')!==null){
		 resp3 = Number(document.querySelector('input[name="preguntaD3"]:checked').value);	
		 document.querySelector('input[name="preguntaD3"]:checked').checked = false;	
	 }	
	 
	 let correctas=resp1+resp2+resp3;
	 document.getElementById("correctas").innerHTML=correctas;
	 document.getElementById("incorrectas").innerHTML=3-correctas;
	  }
 
/**
 * @author mandre29
 */
function Manager(){ 
  	localStorage.setItem("Manager", "12345678");
  	localStorage.setItem("EmailManager","manager@cs.ucy.ac.cy");
 	localStorage.setItem("NameManager", "Anonymous");
	localStorage.setItem("SurnameManager", "Anonymous");
	localStorage.setItem("TelephoneManager", "12345677890");
	localStorage.setItem("TypeManager","M");
  	
  	return true;
  }

function goToPage(form){ 
        var Username =form.username.value;
        var Passsword =form.password.value;
        var type=localStorage.getItem("Type"+Username);
       
        if(type==null){
  	   window.location.replace("custAgenda.html");
    	}
    	else{
    	   if(type=='E'){
  		window.location.replace("empAgenda.html");
  	   }
   	   else{
 		window.location.replace("manAgenda.html");
           }
   	}
}

function checkInput(form){
  	var success= new Boolean(1);
	var username = form.username.value;
	var password= form.password.value;

	if(!checkNamePassword(username, password)){	
		success= Boolean(0);
	}
	if(success){
		goToPage(form);
	}
}

function checkNamePassword(username, password){
	if(localStorage.getItem(username)== null){
		Manager();
			alert('Username does not exist!');
			return false; 
	}
	for (var i = 0; i < localStorage.length; i++) {
    	   var key = localStorage.key(i);
	   var value = localStorage.getItem(key);

	   if(key == username && value != password){
		alert('Password does not match with this username!');
		return false; 
	   }
	}
	return true;	
}

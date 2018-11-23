/**
 * @author mandre29
 */
function goToPage(form){ 
        var Username =form.username.value;
        var Passsword =form.password.value;
        var type=localStorage.getItem("Type"+Username);
       
        if(type==null){
  	   window.open("Customer.html");
    	}
    	else{
    	   if(type=='E'){
  		window.open("Employee.html");
  	   }
   	   else{
 		window.open("Manager.html");
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

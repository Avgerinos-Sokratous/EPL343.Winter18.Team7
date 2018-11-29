/**
 * @author mandre29
 */

/* This function is used to create the account of the manager
*  with specific username as Manager, specific password and other
*  information that manager knows. 
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

/* This function is used to go to the correct page
*  after the login, according to the type of user.
*  We have type of manager, employee and customer
*  and this is distinct by the type: if it is null
*  the type is customer, if it is E the type is employee
*  otherwise the type is manager.
*/
function goToPage(form){ 
        var Username =form.username.value;
        var Passsword =form.password.value;
        var type=localStorage.getItem("Type"+Username);
       
        if(type==null){
  	   window.open("custAgenda.html");
    	}
    	else{
    	   if(type=='E'){
  		window.open("empAgenda.html");
  	   }
   	   else{
 		window.open("manAgenda.html");
           }
   	}
}

/*  This function is used to check if the input in login
*   is correct. It checks if the username and password
*   are same in order to bring user to correct page. This 
*   is checked by using function checkNamePassword.
*/
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

/* This function is used to check if the username exists in
*  the local storage list. If no it shows an error message.
*  If the username exists but it's not the same as password.
*  it shows an error message. Otherwise the function returns
*  true and go back to checkInput function.
*/
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

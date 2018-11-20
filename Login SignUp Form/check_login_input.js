/**
 * @authors mandre29 akikas01
 */

function checkInput(form){
	var username = form.username.value;
	var password= form.password.value;

	if(!checkNamePassword(username, password)){
		success= Boolean(0);
	}else{goToPage();}
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
		
}
function goToPage(){
  	var Username =document.forms["loginform"]["username"].value;
  	var Passsword =document.forms["loginform"]["password"].value;
  	var type=localStorage.getItem("Type"+Username);
  	
  	if(type==null){
  		
  		window.open("Customer.html");
  		
  	}else{
  		window.open("Employee.html");
  		
  		
  	}
  	
  }

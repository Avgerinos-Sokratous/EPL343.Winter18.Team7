/**
 * @author mandre29
 */

function checkInput(form){
	var username = form.username.value;
	var password= form.password.value;

	if(!checkNamePassword(username, password)){
		success= Boolean(0);
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
		
}

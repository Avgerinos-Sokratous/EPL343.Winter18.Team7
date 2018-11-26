/**
 * @author mandre29
 */

function checkPassword(form) {
	if (form.password.value != form.password_confirm.value){
		alert('Password is not the same as password confirm!');
		return false;
	}
	else {
		return true;
	}
}
/**
 * @author akikas01
 */
function authorizeForm(form0) {
	var Username =document.forms["signupform"]["username"].value;
    	var Name = document.forms["signupform"]["fname"].value;
	var Surname = document.forms["signupform"]["lname"].value;
	var Email = document.forms["signupform"]["email"].value;
	var Telephone =  document.forms["signupform"]["telephone"].value;
	var Password = document.forms["signupform"]["password"].value;
	var CPassword = document.forms["signupform"]["password_confirm"].value;
	var success=new Boolean(1);
	if(!findname(Username)){success= Boolean(0);}
	if(!checkPassword(form0)){
	success= Boolean(0);
	}
 	localStorage.setItem(Username, Password);
	localStorage.setItem("Email"+Username, Email);
	localStorage.setItem("Name"+Username, Name);
	localStorage.setItem("Surname"+Username, Surname);
	localStorage.setItem("Telephone"+Username, Telephone);
	if(success){alert("You have succesfully registered!!!");}
    
}
/**
 * @author akikas01
 * @param {Object} un username
 */
function findname(un){
	if(localStorage.getItem(un)!= null){
		alert("Username already in use");
		return false;
	}
	return true;
}

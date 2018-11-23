function changetype() {
	var Username =document.forms["changeAccount"]["Account's Username"].value;
	if(localStorage.getItem(Username)== null) {
		alert("Username does not exist");
		return;
	}
	else{
		if(localStorage.getItem("Type"+Username)!= null){
		   alert(Username+" already set to type Employee!");
		   return;
		}else{
		   localStorage.setItem("Type"+Username,'E');	
		   alert(Username+" has succesfully changed to Employee!");
		}
		return;
	}
  }

  function Manager(){ 
  	localStorage.setItem("Manager", "12345678");
  	localStorage.setItem("EmailManager","manager@cs.ucy.ac.cy");
 	localStorage.setItem("NameManager", "Anonymous");
	localStorage.setItem("SurnameManager", "Anonymous");
	localStorage.setItem("TelephoneManager", "12345677890");
	localStorage.setItem("TypeManager","M");
  	alert("Manager account created");
  	return true;
  }
  
  /*
  function goToPage(){
        var Username =document.forms["loginform"]["username"].value;
        var Passsword =document.forms["loginform"]["password"].value;
        var type=localStorage.getItem("Type"+Username);
        if(type==null){
                                window.location.replace("Customer.html");
                            }else{if(type=='E'){
            window.location.replace("Employee.html");
                                                }else{
            window.location.replace("Manager.html");
                                                }
                    }*/
  

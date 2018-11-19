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

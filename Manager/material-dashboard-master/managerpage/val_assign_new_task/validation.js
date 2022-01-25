
var submitButton = document.getElementById('submit');
var firstName = document.getElementById('first_name');
var employId = document.getElementById('numloc');
var salary = document.getElementById('salary');
var email = document.getElementById('email');
var dob = document.getElementById('email');


submitButton.onclick = (event) => {
	// alert("Clicked")

	if(!isValidName(first_name.value)) alert("Invalid name");
	if(!isValidEmail(email.value)) alert("Invalid Email");
	if(!isValidID(employId.value)) alert("Invalid ID");
    if(!isValidID(salary.value)) alert("Invalid salary");
    if(!isValidID(dob.value)) alert("Invalid DOB");
	event.preventDefault();
}



function isValidName(name)
{
	let obj = /^[a-zA-Z]*$/;
	return obj.test(name);
}

function isValidEmail(email)
{
	let obj = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	return obj.test(email);

}

function isValidID(id)
{
	return id >= 9999 && id <= 1000000;
	alert("task id shoud greater than 1");
}
function isValidID(id)
{
	return id >= 0 && id <= 1;
	alert("task id shoud greater than 1");
}













var submitButton = document.getElementById('submit');
var firstName = document.getElementById('first_name');
var employId = document.getElementById('id');
var salary = document.getElementById('salary');
var email = document.getElementById('email');


submitButton.onclick = (event) => {
	// alert("Clicked")

	if(!isValidName(first_name.value)) alert("Invalid name");
	if(!isValidEmail(email.value)) alert("Invalid Email");
	if(!isValidID(employId.value)) alert("Invalid ID");

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
	return id >= 100 && id <= 99999;
}












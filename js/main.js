$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function checkInfo() {
	var x = document.getElementById("username").value.toUpperCase()
	var y = document.getElementById("password").value
	console.log(x)
	console.log(y)
	if (x=="TONY" && y=="test") {
		document.getElementById("result").innerHTML = "Log In Successful."
	} else {
		document.getElementById("result").innerHTML = "Log In Failed. Try Again."
	}

}
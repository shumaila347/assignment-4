function ValidateEmail(mail) 
{
	var inputVal = document.getElementById("myInput").value;
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{0,3})+$/.test(inputVal))
  {
     alert('Valid Email');
     return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}
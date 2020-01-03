function CheckPassword(inputVal) 
		{ 
			var inputVal = document.getElementById("myInput").value;

			
			var passw=   /^(?=.*[0-9])[A-Za-z]\w{7,}$/;
			if(inputVal.match(passw))
			{ 
				alert('Correct')
				document.getElementById("myInput").value = null;
				return true;
			}
			else
			{ 
				alert('enter a valid password. For character codes of a-z, A-Z & 0-9')
				document.getElementById("myInput").value = null;
				return false;
			}
			

		}
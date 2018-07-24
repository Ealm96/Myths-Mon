
function myFunction(){
  var usrnm = document.forms["myForm"]["usrnm"].value;
  var p1 = document.forms["myForm"]["psw"].value;
  var p2 = document.forms["myForm"]["psw-repeat"].value;
  if(p1 != p2){
    alert('Passwords do not match!');
  }
  else if (p1 == p2) {
    localStorage.setItem(usrnm, p1);
  }
}

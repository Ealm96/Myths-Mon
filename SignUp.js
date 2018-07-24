
function myFunction(){
  var usrnm = document.forms["myForm"]["usrnm"].value;
  var p1 = document.forms["myForm"]["psw"].value;
  var p2 = document.forms["myForm"]["psw-repeat"].value;
  var pr = document.getElementById("pswd-r");
  var usnm = document.getElementById("usnm");
  var p = document.getElementById("pswd");
  if (usrnm == usnm.placeholder) {
    usnm.style.backgroundColor = "red";
  }
  if (p1 == p1.placeholder) {
    p.style.backgroundColor = "red";
  }
  if (p2 == p2.placeholder) {
    pr.style.backgroundColor = "red";
  }
  if(p1 != p2){
    alert('Passwords do not match!');
  }
  else if (p1 == p2) {
    localStorage.setItem(usrnm, p1);
  }
}

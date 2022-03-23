/* let container1 = document.querySelector(".container1");
let container2 = document.querySelector(".container2");
container2.style.display = "none";
function goToHome() {
    container1.style.display = "none";
    container2.style.display = "block";
 }*/



 let alertBox = document.querySelector(".alertbox");
 alertBox.style.display = "none";


 function signUp(){

 checkInfo();
 
}



  function checkInfo(){
    let uName = document.getElementById("uname").value;
    let pWord =  document.getElementById("pword").value;
    let cPword = document.getElementById("confirmP").value;
    let  forms = document.getElementById('form');
    
if (cPword != pWord) {
    
   alert("Your passwords do not match.");
}
else if(cPword === pWord) {
    forms.action = 'signin.html'
  }
 }


 
 
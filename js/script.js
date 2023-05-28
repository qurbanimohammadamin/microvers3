
// this function check the new acount form informations
var i = false;
function newAcount(){
  var name1 = document.getElementById('newName').value;
  var lastName1 = document.getElementById('lastName').value;
  var newPassword1 = document.getElementById('newPassword').value;
  var conNewPassword1 = document.getElementById('conNewPassword').value;
  var phoneNumber1 = document.getElementById('phoneNumber').value;
  var phoneNumber2 = parseInt(phoneNumber1);
  var newEmail = document.getElementById('email').value;
  var space = newPassword1.indexOf(" ");
  var Emailsicurity = newEmail.split("@");
  i=true;


if (newEmail == "") {
  document.getElementById ('emailMas').innerHTML = "Please enter your E_mail!";
}
else if ((Emailsicurity[0].length)<3) {
  document.getElementById('emailMas').innerHTML="Invalid email address!";
  return false;
}
else if (Emailsicurity[1].length>0) {
  var dote = Emailsicurity[1].indexOf(".");
  var domainextention = Emailsicurity[1].split(".");
  if(dote == -1){
    document.getElementById('emailMas').innerHTML=" type a dote between <br> domain and extention!";
    return false;
  }
  else if (domainextention[0].length<2) {
    document.getElementById('emailMas').innerHTML="Invalid domain name!";
    return false;
  }
  else if (domainextention[1].length<2) {
    document.getElementById('emailMas').innerHTML="Invalid extention!";
    return false;
  }
}

else {
  document.getElementById ('emailMas').innerHTML = "";
}

if(name1 == ""){
document.getElementById('newNameMas').innerHTML = "Please enter your name!";
}
else {
document.getElementById('newNameMas').innerHTML = "";
}

if (lastName1 == "") {
  document.getElementById('lastNameMas').innerHTML = "Please enter your last name!";
}
else {
  document.getElementById('lastNameMas').innerHTML = "";
}

if (newPassword1 == "") {
    document.getElementById('newPasswordMas').innerHTML = "Please choice a password!";
}

else if (space != -1) {
  document.getElementById('newPasswordMas').innerHTML = "space not alowed!";
  return false;
}
else if(newPassword1.length < 8){
  document.getElementById('newPasswordMas').innerHTML = "The password is so short! <br>  between 8 and 16 charecters.";
  return false;
}
else if(newPassword1.length > 16){
 document.getElementById('newPasswordMas').innerHTML = "The password is too long!<br> between 8 and 16 charecters.";
 return false;
}
else {
    document.getElementById('newPasswordMas').innerHTML = "";
}

if (conNewPassword1 != newPassword1) {
  if (conNewPassword1 == "") {
    document.getElementById('conNewPasswordMas').innerHTML = "Please conform the password!";
  }
  else {
    document.getElementById('conNewPasswordMas').innerHTML = "incorrect password!<br> conformation";
  }
}
else {
  document.getElementById('conNewPasswordMas').innerHTML = "";
}


if (phoneNumber2 > 0093799999999 || phoneNumber2 < 0093700000000 && phoneNumber2 != 0093) {
document.getElementById('phoneNumberMas').innerHTML="Invalid phone number!";
return false;
}

else {
  document.getElementById('phoneNumberMas').innerHTML="";
}


if (name1 == "" || lastName1 == "" || newPassword1 == "" || conNewPassword1 == "" || newPassword1 != conNewPassword1 || newEmail == "") {
  return false;
}
else {
  return true;
}
}













function newAcount2(){
  var name1 = document.getElementById('newName').value;
  var lastName1 = document.getElementById('lastName').value;
  var newPassword1 = document.getElementById('newPassword').value;
  var conNewPassword1 = document.getElementById('conNewPassword').value;
  var phoneNumber1 = document.getElementById('phoneNumber').value;
  var phoneNumber2 = parseInt(phoneNumber1);
  var newEmail = document.getElementById('email').value;
  var space = newPassword1.indexOf(" ");


  if (i) {


if (newEmail == "") {
  document.getElementById ('emailMas').innerHTML = "Please enter your E_mail!";
}
else {
  document.getElementById ('emailMas').innerHTML = "";
}

if(name1 == ""){
document.getElementById('newNameMas').innerHTML = "Please enter your name!";
}
else {
document.getElementById('newNameMas').innerHTML = "";
}

if (lastName1 == "") {
  document.getElementById('lastNameMas').innerHTML = "Please enter your last name!";
}
else {
  document.getElementById('lastNameMas').innerHTML = "";
}

if (newPassword1 == "") {
    document.getElementById('newPasswordMas').innerHTML = "Please choice a password!";
}

else if (space != -1) {
  document.getElementById('newPasswordMas').innerHTML = "space not alowed!";
  return false;
}
else if(newPassword1.length < 8){
  document.getElementById('newPasswordMas').innerHTML = "The password is so short! <br>  between 8 and 16 charecters.";
  return false;
}
else if(newPassword1.length > 16){
 document.getElementById('newPasswordMas').innerHTML = "The password is too long!<br> between 8 and 16 charecters.";
 return false;
}
else {
    document.getElementById('newPasswordMas').innerHTML = "";
}

if (conNewPassword1 != newPassword1) {
    document.getElementById('conNewPasswordMas').innerHTML = "";
}
else {
  document.getElementById('conNewPasswordMas').innerHTML = "";
}

}

}









//this function is for checking login is empty or no
function check(){
  var name = document.getElementById('name').value;
  var password = document.getElementById('password').value;

  if(name == "" && password == "")  {
  document.getElementById('nameMassage').innerHTML = " Please Enter Your name!";
  document.getElementById('passwordMassage').innerHTML = " Please Enter Your password!";
  return false;
  }
  else if( name == ""){
    document.getElementById('nameMassage').innerHTML = " Please Enter Your name!";
    document.getElementById('passwordMassage').innerHTML = "";
    return false;
  }

  else  if(password ==""){
    document.getElementById('passwordMassage').innerHTML = " Please Enter Your password!";
    document.getElementById('nameMassage').innerHTML = "";
    return false;}

  else {
      if(name != "amin" && password != "amin" )  {
      document.getElementById('nameMassage').innerHTML = "";
      document.getElementById('passwordMassage').innerHTML = " incorrect password!";
      return false;
      }
      else if( name != "amin"){
        document.getElementById('nameMassage').innerHTML = "";
        document.getElementById('passwordMassage').innerHTML = "incorrect password!";
        return false;
      }
      else  if(password !="amin"){
        document.getElementById('nameMassage').innerHTML = "";
        document.getElementById('passwordMassage').innerHTML = "incorrect password!";
        return false;}
        else {

          return true;
        }
    }
}







//this function is foe checking password length
function passwordlength(){
  var password = document.getElementById('newPassword').value;
  var pass_length = password.length;
  var space = password.indexOf(" ");
  if (space != -1) {
    document.getElementById('newPasswordMas').innerHTML = "Space not alowed!";
  }
  if(pass_length < 8 && pass_length > 0){
    document.getElementById('newPasswordMas').innerHTML = "The password is so short! <br> between 8 and 16 charecters.";
  }
else if(pass_length > 16){
   document.getElementById('newPasswordMas').innerHTML = "The password is too long!<br> between 8 and 16 charecters.";

 }

 else {
   document.getElementById('newPasswordMas').innerHTML = "";
 }
}


function notSpace(){
  var password = document.getElementById('newPassword').value;
  var space = password.indexOf(" ");
  if (space != -1) {
    document.getElementById('newPasswordMas').innerHTML = "Space not alowed!";
  }
  else {
    document.getElementById('newPasswordMas').innerHTML = "";
  }
}


function clocked() {
  var c = new Date();
  var h = c.getHours();
  var m = c.getMinutes();
  var s = c.getSeconds();
  h = parseInt(h);
  m = parseInt(m);
  s = parseInt(s);
  if ( s < 10 && m < 10 && h < 10) {
    document.getElementById('myClock').innerHTML = "0"+h + ":0" + m + ":0" +s;
  }
  else if (s < 10 && h < 10) {
    document.getElementById('myClock').innerHTML = "0"+ h + ":" + m + ":0" + s;
  }
  else if (s < 10 && m < 10) {
    document.getElementById('myClock').innerHTML = h + ":0" + m + ":0" +s;
}
  else if (h < 10 && m < 10) {
    document.getElementById('myClock').innerHTML = "0" + h + ":0" + m + ":" +s;
}
  else if (s < 10 ) {
    document.getElementById('myClock').innerHTML = h + ":" + m + ":0" +s;
  }
  else if (h < 10 ) {
    document.getElementById('myClock').innerHTML = "0" + h + ":" + m + ":" +s;
  }
  else if (m < 10 ) {
    document.getElementById('myClock').innerHTML = h + ":0" + m + ":" +s;
  }
else {
  document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s;
}



}

//this function is for header
function dont(){
  alert("Don't click!");
}

window.setInterval(clocked,100);

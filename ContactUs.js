function validateForm() {

    var termsCheckbox = document.getElementById("terms");


let name = document.forms["myForm"]["fname"].value;
if (name == "") {
  alert("Please Enter Your Name");
  return false;
}

let phonenumber = document.forms["myForm"]["number"].value;
if (phonenumber <= 9) {
  alert("Please Enter Your Phone Number");
  return false;
}

let emailaddress = document.forms["myForm"]["email"].value;
if (emailaddress == "") {
  alert("Please Enter Your Email Address");
  return false;
}

let checkbox = document.forms["myForm"]["email"].value;
if (emailaddress == "") {
  alert("Please Enter Your Email Address");
  return false;
}

if (!termsCheckbox.checked) {
    alert("Please accept the terms and conditions before submitting the form.");
    return false;
}
return true;
}
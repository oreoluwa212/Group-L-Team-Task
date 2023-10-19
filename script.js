// Declare constants for the phone input element, provider logo element, and error message element.
const phoneInput = document.querySelector(".phone");
const providerLogo = document.querySelector(".provider-logo");
const errormsg = document.querySelector('.error');


// Declare a function called detectProvider() that takes a phone number as input and returns the name of the telecoms carrier.
function detectProvider(phoneNumber) {

  // Declare four regular expression patterns, one for each of the four major telecoms carriers in Nigeria.
  // Regular expressions are a way to match text against a specific pattern.
  const mtnPattern = /^(\+234|0)(703|706|803|806|810|813|814|816|903|906|913)/;
  const gloPattern = /^(\+234|0)(705|805|807|811|815|905)/;
  const airtelPattern = /^(\+234|0)(701|708|802|808|812|902|907|901)/;
  const etisalatPattern = /^(\+234|0)(809|817|818|908|909|807)/;

  // Remove all of the carrier logos and error messages from the page.
  providerLogo.classList.remove("mtn", "glo", "airtel", "nineMobile");
  errormsg.classList.remove("errormsg");
  
  // Use the regular expression patterns to match the phone number against the known carrier patterns.
  // If the phone number matches one of the patterns, the corresponding carrier logo is displayed.
  // If the phone number does not match any of the patterns, an error message is displayed.
  if (mtnPattern.test(phoneNumber)) {
    providerLogo.classList.add("mtn");
  } else if (gloPattern.test(phoneNumber)) {
    providerLogo.classList.add("glo");
  } else if (airtelPattern.test(phoneNumber)) {
    providerLogo.classList.add("airtel");
  } else if (etisalatPattern.test(phoneNumber)) {
    providerLogo.classList.add("nineMobile");
  } 
  else {
    errormsg.classList.add("errormsg");
  }
}


// Event listener to detect changes in the input field.
// When the user changes the phone number, the detectProvider() function is called to update the carrier logo and error message.
phoneInput.addEventListener("input", function () {
  const phoneNumber = this.value;
  detectProvider(phoneNumber);
  if (phoneInput.value === '' ){
    errormsg.classList.remove('errormsg')
  }
});


//OnClick function for submit alert
function submitAlert(){
  const inputValue = phoneInput.value;
  if (inputValue.length < 11 && !inputValue.startsWith('+234')) {
    alert("Incomplete Phone Number")
  }
  else if (inputValue.length < 14 && inputValue.startsWith('+234')) {
    alert("Incomplete Phone Number")
  }
  else {
  const alertMsg = document.querySelector(".submit-button")
  alertMsg.innerHTML= "form submitted"
  alert('thank you for submitting')
  }
}
const alertMsg = document.querySelector(".submit-button")
alertMsg.onclick=function(){
  submitAlert()
  
}

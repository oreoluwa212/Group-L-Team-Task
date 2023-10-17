const phoneInput = document.querySelector(".phone");
const providerLogo = document.querySelector(".provider-logo");

function detectProvider(phoneNumber) {
  const mtnPattern = /^(\+234|0)(703|706|803|806|810|813|814|816|903|906|913)/;
  const gloPattern = /^(\+234|0)(705|805|807|811|815|905)/;
  const airtelPattern = /^(\+234|0)(701|708|802|808|812|902|907|901)/;
  const etisalatPattern = /^(\+234|0)(809|817|818|908|909|807)/;

  providerLogo.classList.remove("mtn", "glo", "airtel", "nineMobile");

  if (mtnPattern.test(phoneNumber)) {
    providerLogo.classList.add("mtn");
  } else if (gloPattern.test(phoneNumber)) {
    providerLogo.classList.add("glo");
  } else if (airtelPattern.test(phoneNumber)) {
    providerLogo.classList.add("airtel");
  } else if (etisalatPattern.test(phoneNumber)) {
    providerLogo.classList.add("nineMobile");
  }
}

// Event listener to detect changes in the input field
phoneInput.addEventListener("input", function () {
  const phoneNumber = this.value;
  detectProvider(phoneNumber);
});

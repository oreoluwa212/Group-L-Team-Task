document.getElementById("checkCarrier").addEventListener("click", function () {
  const mtn = document.getElementById("mtn");
  const glo = document.getElementById("glo");
  const airtel = document.getElementById("airtel");
  const mobile = document.getElementById("mtn");
  const phoneInput = document.getElementById("phoneInput").value;
  const resultElement = document.getElementById("result");
  const carrier = detectCarrier(phoneInput);
  if (carrier) {
    resultElement.innerHTML = `Carrier: ${carrier}`;
  } else {
    resultElement.innerHTML = "Unable to detect carrier.";
  }
});

function detectCarrier(phoneNumber) {
  // Regular expressions to match carrier patterns
  const mtnPattern =
    /^(\+234|0)(702|703|704|706|707|708|709|803|804|805|806|810|812|814|816|909|907)/;
  const gloPattern =
    /^(\+234|0)(705|805|705|805|811|812|903|905|906|915|916|917|927|927|936|937)/;
  const airtelPattern =
    /^(\+234|0)(701|702|703|702|703|706|707|708|708|802|802|902|902|903|903|904|904|905|901|701|701)/;
  const etisalatPattern = /^(\+234|0)(808|809|909|807|817|908|817|908|909|807)/;

  if (mtnPattern.test(phoneNumber)) {
    mtn.style.display = "block";
    return "MTN";
  } else if (gloPattern.test(phoneNumber)) {
    glo.style.display = "block";
    return "Glo";
  } else if (airtelPattern.test(phoneNumber)) {
    airtel.style.display = "block";
    return "Airtel";
  } else if (etisalatPattern.test(phoneNumber)) {
    mobile.style.display = "block";
    return "9mobile";
  } else {
    return "Unknown";
  }
}

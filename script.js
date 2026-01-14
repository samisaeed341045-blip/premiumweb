function scrollToContact() {
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

function sendMessage(e) {
  e.preventDefault();
  alert("Thanks! I will contact you shortly.");
}

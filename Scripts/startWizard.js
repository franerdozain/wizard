const startWizard = document.getElementById("startWizard");
startWizard.addEventListener("click", () => window.location = "phase1.html");

localStorage.removeItem("user")
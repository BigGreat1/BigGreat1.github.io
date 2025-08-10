

document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Hide form and show success
  document.getElementById("paymentForm").style.display = "none";
  document.getElementById("successMessage").classList.remove("hidden");
});

// Redirect to home page when button clicked
document.getElementById("homeBtn").addEventListener("click", function() {
  window.location.href = "../../Feature1/text/firstpage.html"; // change path if needed
});

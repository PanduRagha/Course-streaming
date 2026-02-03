function submitQuiz() {
  alert("Correct! Progress updated.");
  localStorage.setItem("progress", 100);
  window.location.href = "dashboard.html";
}

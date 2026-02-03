function login() {
  const user = document.getElementById("username").value;

  if (user) {
    localStorage.setItem("user", user);
    window.location.href = "dashboard.html";
  } else {
    alert("Please enter username");
  }
}

document.getElementById("user").innerText =
  localStorage.getItem("user");

document.getElementById("progress").innerText =
  localStorage.getItem("progress") || 0;

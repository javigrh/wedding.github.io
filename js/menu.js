
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".menu-btn");
  const sidebar = document.querySelector(".sidebar");
  btn.addEventListener("click", () => sidebar.classList.toggle("open"));
});


function updateCountdown() {
  const eventDate = new Date("2026-05-10T17:00:00");
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.getElementById("digital-clock").innerText = "¡Es hoy!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("digital-clock").innerText =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".carousel img");
  let index = 0;
  function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
  }
  showImage(index);
  setInterval(() => {
    index = (index + 1) % images.length;
    showImage(index);
  }, 3000);
});

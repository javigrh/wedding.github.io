
document.addEventListener("DOMContentLoaded", function () {
  const eventDate = new Date("2026-05-10T17:00:00").getTime();

  function updateClock() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById("digital-clock").innerHTML = "¡Ha llegado el gran día!";
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("digital-clock").innerHTML =
      `${d}d ${h}h ${m}m ${s}s`;
  }

  updateClock();
  setInterval(updateClock, 1000);
});

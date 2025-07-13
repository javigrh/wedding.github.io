
document.addEventListener("DOMContentLoaded", function () {
  const countdown = () => {
    const eventDate = new Date("2026-05-10T17:00:00").getTime();
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById("timer").innerHTML = "¡Hoy es el gran día!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerHTML = 
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
  };

  countdown();
  setInterval(countdown, 1000);
});

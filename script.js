// Countdown
const countdownDate = new Date("2025-09-13T00:00:00+05:30").getTime();

function animateCountdown() {
  const els = document.querySelectorAll('.time');
  els.forEach(el => {
    el.style.animation = "bounce 0.7s";
    setTimeout(() => el.style.animation = '', 700);
  });
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  
  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<h2 style='color:#fa2888'>Happy Birthday, Vani! 🎉💖</h2>";
    return;
  }
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  animateCountdown();
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Cute Floating Pink Hearts
const pinks = ["#ffb6da", "#ff6fa0", "#ff7bac", "#ff9cb3", "#fa2888", "#ffaad9", "#fcc0d7", "#ff62a5","#f5a5bc"];

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  // Only pink pastel colors
  heart.style.color = pinks[Math.floor(Math.random() * pinks.length)];
  heart.style.left = Math.random() * 98 + "vw";
  heart.style.fontSize = (22 + Math.random() * 14) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";
  heart.style.opacity = (0.75 + Math.random() * 0.2);

  // The inner heart shape
  const shape = document.createElement('div');
  shape.classList.add('heart-shape');
  heart.appendChild(shape);

  // Add to hearts-bg so they're behind container
  document.querySelector('.hearts-bg').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

setInterval(createHeart, 100);

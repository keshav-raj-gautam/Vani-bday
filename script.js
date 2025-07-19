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
  heart.style.color = pinks[Math.floor(Math.random() * pinks.length)];
  heart.style.left = Math.random() * 98 + "vw";
  heart.style.fontSize = (22 + Math.random() * 14) + "px";
  heart.style.animationDuration = (5 + Math.random() * 4) + "s";
  heart.style.opacity = (0.75 + Math.random() * 0.2);

  const shape = document.createElement('div');
  shape.classList.add('heart-shape');
  heart.appendChild(shape);

  document.querySelector('.hearts-bg').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}
setInterval(createHeart, 100);

// Interactive burst
function burstHearts(x, y) {
  for (let i = 0; i < 12; i++) {
    const burstHeart = document.createElement('div');
    burstHeart.classList.add('heart', 'burst-heart');
    burstHeart.style.color = pinks[Math.floor(Math.random() * pinks.length)];
    burstHeart.style.left = (x - 16) + "px";
    burstHeart.style.top = (y - 16) + "px";
    burstHeart.style.fontSize = (14 + Math.random() * 12) + "px";
    burstHeart.style.opacity = 1;

    const shape = document.createElement('div');
    shape.classList.add('heart-shape');
    burstHeart.appendChild(shape);

    document.body.appendChild(burstHeart);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 60 + Math.random() * 40;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    burstHeart.animate([
      { 
        transform: 'translate(0,0) scale(1)',
        opacity: 1
      },
      {
        transform: `translate(${dx}px, ${dy}px) scale(0.7)`,
        opacity: 0
      }
    ], {
      duration: 950 + Math.random() * 350,
      easing: 'cubic-bezier(.25,1.5,.5,1)'
    });

    setTimeout(() => burstHeart.remove(), 1300);
  }
}

// Burst on mouse/touch
window.addEventListener('click', e => burstHearts(e.clientX, e.clientY));
window.addEventListener('touchstart', e => {
  const touch = e.touches[0];
  burstHearts(touch.clientX, touch.clientY);
});

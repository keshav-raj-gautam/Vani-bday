const countdownDate = new Date("2025-09-13T00:00:00+05:30").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;
  
  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "<h2>Happy Birthday, Vani!</h2>";
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
}

setInterval(updateCountdown, 1000);
updateCountdown();

// JavaScript to add multiple floating hearts randomly
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Create the inner heart shape for better proportions
  const shape = document.createElement('div');
  shape.classList.add('heart-shape');
  heart.appendChild(shape);

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';
  heart.style.opacity = Math.random();
  heart.style.fontSize = (20 + Math.random() * 20) + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}


setInterval(createHeart, 100);

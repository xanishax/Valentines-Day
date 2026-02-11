document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const buttons = document.getElementById("buttons");
  const celebration = document.getElementById("celebration");

  let yesSize = 16;
  let chaseCount = 0;

  // Confetti setup
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let confettiPieces = [];

  function startConfetti() {
    confettiPieces = [];
    for (let i = 0; i < 150; i++) {
      confettiPieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 6 + 4,
        d: Math.random() * 5 + 2,
        color: `hsl(${Math.random() * 360}, 100%, 60%)`
      });
    }

    drawConfetti();

  }

 

  function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiPieces.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.d;

      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }

    });

    requestAnimationFrame(drawConfetti);

  }

 

  // YES click

  yesBtn.addEventListener("click", () => {

    buttons.remove();              // remove buttons

    celebration.classList.remove("hidden"); // show YAYY + meme

    startConfetti();

  });

 

  // NO runs away + YES grows

  noBtn.addEventListener("mouseenter", () => {

    const maxX = window.innerWidth - noBtn.offsetWidth;

    const maxY = window.innerHeight - noBtn.offsetHeight;

 

    noBtn.style.position = "absolute";

    noBtn.style.left = `${Math.random() * maxX}px`;

    noBtn.style.top = `${Math.random() * maxY}px`;

    chaseCount++;

    yesSize += 4;

    yesBtn.style.fontSize = `${yesSize}px`;

    yesBtn.style.padding = `${10 + chaseCount * 2}px ${20 + chaseCount * 4}px`;

  });

 

  window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;

  });

});
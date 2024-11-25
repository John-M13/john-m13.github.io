let balls = []; // Array para almacenar las bolitas

document.addEventListener("mousemove", (e) => {
  // Crear una nueva bolita
  const ball = document.createElement("div");
  ball.classList.add("ball");
  document.body.appendChild(ball);

  // Posicionar la bolita donde está el cursor
  ball.style.left = `${e.pageX}px`;
  ball.style.top = `${e.pageY}px`;

  // Inicializar el movimiento de rebote de la bolita
  let angle = Math.random() * Math.PI * 2; // Ángulo aleatorio para el rebote
  let speed = 3 + Math.random() * 2; // Velocidad aleatoria
  let xVelocity = Math.cos(angle) * speed;
  let yVelocity = Math.sin(angle) * speed;

  // Animación de rebote
  function bounceBall() {
    let rect = ball.getBoundingClientRect();

    // Verificar las colisiones con los bordes de la ventana
    if (
      rect.left + xVelocity < 0 ||
      rect.right + xVelocity > window.innerWidth
    ) {
      xVelocity = -xVelocity; // Rebote horizontal
    }
    if (
      rect.top + yVelocity < 0 ||
      rect.bottom + yVelocity > window.innerHeight
    ) {
      yVelocity = -yVelocity; // Rebote vertical
    }

    // Mover la bolita
    ball.style.left = rect.left + xVelocity + "px";
    ball.style.top = rect.top + yVelocity + "px";

    // Continuar animando con requestAnimationFrame
    requestAnimationFrame(bounceBall);
  }

  // Iniciar el rebote
  bounceBall();

  // Almacenar la bolita en el array para controlarlas
  balls.push(ball);

  // Limitar el número de bolitas generadas para no sobrecargar la página
  if (balls.length > 100) {
    balls[0].remove(); // Eliminar la bolita más antigua
    balls.shift(); // Eliminarla del array
  }
});

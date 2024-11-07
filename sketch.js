let squares = []; // Array para almacenar los cuadrados
let colors = [
  [0, 60, 67], // Color 1
  [19, 93, 102], // Color 2
  [119, 176, 170], // Color 3
  [227, 254, 247], // Color 4
];

function setup() {
  let miCanvas = createCanvas(windowWidth, windowHeight);
  miCanvas.parent("#my-p5-sketch");
  frameRate(30); // Ajuste de la velocidad de aparición
}

function draw() {
  background(0); // Fondo negro sin transparencia

  // Genera un cuadrado a la vez en la posición del cursor
  let size = random(20, 50); // Tamaño más pequeño (de 20 a 50)
  let x = mouseX + random(-20, 20); // Posición aleatoria alrededor del cursor
  let y = mouseY + random(-20, 20); // Posición aleatoria alrededor del cursor
  let color = random(colors);

  // Crear un nuevo cuadrado con opacidad en los bordes y agregarlo al array
  squares.push({
    x: x,
    y: y,
    size: size,
    color: color,
    speed: random(1, 3), // Velocidad hacia arriba
    opacity: 255, // Opacidad inicial
  });

  // Dibuja y actualiza los cuadrados
  for (let i = squares.length - 1; i >= 0; i--) {
    let square = squares[i];

    // Relleno del cuadrado con opacidad
    fill(square.color[0], square.color[1], square.color[2], square.opacity);
    noStroke();

    // Bordes redondeados con opacidad (usando stroke)
    stroke(
      square.color[0],
      square.color[1],
      square.color[2],
      square.opacity / 2
    ); // Borde con menos opacidad
    strokeWeight(3); // Grosor del borde

    // Dibuja el cuadrado con bordes redondeados
    let borderRadius = 10; // Radio de los bordes redondeados
    rect(square.x, square.y, square.size, square.size, borderRadius);

    // Mueve el cuadrado hacia arriba
    square.y -= square.speed;

    // Disminuye la opacidad gradualmente
    square.opacity -= 5;

    // Elimina cuadrados que están fuera de la pantalla o con opacidad 0
    if (square.y + square.size < 0 || square.opacity <= 0) {
      squares.splice(i, 1);
    }
  }
}

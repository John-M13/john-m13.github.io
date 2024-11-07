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
  frameRate(30); // Ajuste de  la velocidad de aparición
}

function draw() {
  background(0); // Fondo negro sin transparencia

  // Agrega nuevos cuadrados cerca de la posición del cursor
  for (let i = 0; i < 5; i++) {
    let size = random(10, 30);
    let x = mouseX + random(-20, 20);
    let y = mouseY + random(-20, 20);

    // Elige un color aleatorio del array de colores
    let color = random(colors);

    // Crear un nuevo cuadrado y agrega al array
    squares.push({
      x: x,
      y: y,
      size: size,
      color: color,
      speed: random(1, 3), // Velocidad hacia arriba
    });
  }

  // Dibuja y actualiza los cuadrados
  for (let i = squares.length - 1; i >= 0; i--) {
    let square = squares[i];
    fill(square.color[0], square.color[1], square.color[2]);
    noStroke();
    rect(square.x, square.y, square.size, square.size);

    // Mueve  el cuadrado hacia arriba
    square.y -= square.speed;

    // Elimina cuadrados que están fuera de la pantalla
    if (square.y + square.size < 0) {
      squares.splice(i, 1);
    }
  }
}

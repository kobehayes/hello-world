let images = [];
let currentIndex = 0;
let nextIndex = 1;
let lerpAmount = 0;

function preload() {
  images[0] = loadImage('aux-imgs/aux2-6.jpg');
  images[1] = loadImage('photography/pho3.jpeg');
  // Load more images as needed
}

function setup() {
  let canvas = createCanvas(1500, 600);
  canvas.parent('canvasContainer');
  frameRate(30);
}

function draw() {
  background(255);

  // Calculate the x-positions of the current and next images
  let xCurrent = lerp(width, -width, lerpAmount);
  let xNext = lerp(2 * width, 0, lerpAmount);

  // Draw the current and next images
  image(images[currentIndex], xCurrent, 0, width, height);
  image(images[nextIndex], xNext, 0, width, height);

  // Increase the lerp amount
  lerpAmount += 0.02;

  // If the transition is complete
  if (lerpAmount >= 1) {
    // Reset the lerp amount
    lerpAmount = 0;

    // Move to the next image
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % images.length;
  }
}
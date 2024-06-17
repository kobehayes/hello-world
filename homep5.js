let images = [];
let currentIndex = 0;
let nextIndex = 1;
let lerpAmount = 0;

function preload() {
  images[0] = loadImage('aux-imgs/aux2-6.jpg');
  images[1] = loadImage('photography/pho3.jpeg');
  images[2] = loadImage('photography/pho4.jpeg');
  images[3] = loadImage('photography/pho5.jpeg');
  // Load more images as needed
}

function setup() {
  let canvas = createCanvas(1500, 600);
  canvas.parent('canvasContainer');
  frameRate(30);
  background(255);
}

let transitionDelay = 3000; // Delay between transitions in milliseconds
let lastTransitionTime = 0; // Time when the last transition finished

function draw() {
  // If enough time has passed since the last transition, start the next transition
  if (millis() - lastTransitionTime > transitionDelay) {
    // Increase the lerp amount
    lerpAmount += 0.05;

    // If lerpAmount is greater than or equal to 1, reset it to 0 and update the lastTransitionTime
    if (lerpAmount >= 1) {
      lerpAmount = 0;
      lastTransitionTime = millis();
    }
  }

  // Calculate the x-position of the next image
  let xNext = lerp(width, 0, lerpAmount);

  // Calculate the height of the images based on their width and aspect ratio
  let hCurrent = images[currentIndex].height * (width / images[currentIndex].width);
  let hNext = images[nextIndex].height * (width / images[nextIndex].width);

  // Draw the current and next images
  image(images[currentIndex], 0, (height - hCurrent) / 2, width, hCurrent);
  image(images[nextIndex], xNext, (height - hNext) / 2, width, hNext);

  // If the transition is complete
  if (lerpAmount >= 1) {
    // Reset the lerp amount
    lerpAmount = 0;

    // Move to the next image
    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % images.length;
  }
}

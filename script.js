function toggleText() {
  const hiddenText = document.getElementById("about-txt");
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block"
    hiddenText.style.animation = "fade-in 0.8s ease";
  } else {
    hiddenText.style.display = "none";
  }
}

function GoToHomePage()
{
    window.location = 'index.html';   
}

const numberOfImages = 12;
const galleryContainer = document.getElementById('gallery-container');
const projectPage = document.getElementById('project-page');
let scrollSimulatorCounter = 0;

// Function to generate random coordinates within the container
function getRandomPosition() {
  const containerWidth = galleryContainer.clientWidth;
  const containerHeight = galleryContainer.clientHeight;

  const x = Math.floor(Math.random() * (containerWidth - 100)); // Subtract image width
  const y = Math.floor(Math.random() * (containerHeight - 100)); // Subtract image height

  return { x, y };
}

// Function to add a new image to the gallery
function addNewImage() {
  const imageUrls = [
    'img/JS_Test_IMG1.png',
    'img/JS_Test_IMG2.png',
    'img/JS_Test_IMG3.png',
    'img/JS_Test_IMG4.jpg',
    'img/JS_Test_IMG5.jpg',
    'img/JS_Test_IMG6.jpg',
    'img/JS_Test_IMG1.png',
    'img/JS_Test_IMG2.png',
    'img/JS_Test_IMG3.png',
    'img/JS_Test_IMG4.jpg',
    'img/JS_Test_IMG5.jpg',
    'img/JS_Test_IMG6.jpg',
  ];

  const image = new Image();
  const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
  image.src = randomImageUrl;
  image.classList.add('gallery-image');

  const position = getRandomPosition();

  // Adjust image position if it goes outside the container
  if (position.x + image.width > galleryContainer.clientWidth) {
    position.x = galleryContainer.clientWidth - image.width;
  }

  if (position.y + image.height > galleryContainer.clientHeight) {
    position.y = galleryContainer.clientHeight - image.height;
  }

  image.style.left = `${position.x}px`;
  image.style.top = `${position.y}px`;

  galleryContainer.appendChild(image);
}

// Function to create and position the initial images
function createImages() {
  const imageUrls = [
    'img/JS_Test_IMG1.png',
    'img/JS_Test_IMG2.png',
    'img/JS_Test_IMG3.png',
    'img/JS_Test_IMG4.jpg',
    'img/JS_Test_IMG5.jpg',
    'img/JS_Test_IMG6.jpg',
    'img/JS_Test_IMG1.png',
    'img/JS_Test_IMG2.png',
    'img/JS_Test_IMG3.png',
    'img/JS_Test_IMG4.jpg',
    'img/JS_Test_IMG5.jpg',
    'img/JS_Test_IMG6.jpg',
  ];

  for (let i = 0; i < numberOfImages; i++) {
    const image = new Image();
    image.src = imageUrls[i];
    image.classList.add('gallery-image');

        // Add click event listener to each image
        image.addEventListener('click', () => {
          showProjectPage();
          hideGalleryContainer();
        });

        image.onload = () => {
          const position = getRandomPosition();
    
          // Adjust image position if it goes outside the container
          if (position.x + image.width > galleryContainer.clientWidth) {
            position.x = galleryContainer.clientWidth - image.width;
          }
    
          if (position.y + image.height > galleryContainer.clientHeight) {
            position.y = galleryContainer.clientHeight - image.height;
          }
    
          image.style.left = `${position.x}px`;
          image.style.top = `${position.y}px`;
        };

    galleryContainer.appendChild(image);
  }
}

// Call the function to create the initial images
createImages();

// Function to hide the gallery container
function hideGalleryContainer() {
  galleryContainer.style.display = 'none';
}

// Function to show the generic project page
function showProjectPage() {
  projectPage.style.display = 'block';
}

// Function to hide the project page
function hideProjectPage() {
  projectPage.style.display = 'none';
}

// Function to show the gallery container
function showGalleryContainer() {
  galleryContainer.style.display = 'flex';
}

const backButton = document.getElementById('back-button');

// Add click event listener to the button
backButton.addEventListener('click', () => {
  hideProjectPage();
  showGalleryContainer();
});

// Simulate scrolling behavior using the wheel event
window.addEventListener('wheel', (event) => {
  event.preventDefault();

  // Increase or decrease the scrollSimulatorCounter based on wheel direction
  scrollSimulatorCounter += event.deltaY > 0 ? 1 : -1;

  // Adjust the threshold value to control how many images are added on each "scroll"
  const threshold = 5;
  while (scrollSimulatorCounter >= threshold) {
    addNewImage();
    scrollSimulatorCounter -= threshold;
  }

  while (scrollSimulatorCounter <= -threshold) {
    addNewImage();
    scrollSimulatorCounter += threshold;
  }
});
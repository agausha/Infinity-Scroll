const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Variables
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let isInitialLoad = true;

// Unsplash API
let picCount = 5;
const apiKey = 'NIlze4okNpOKbHbn0mD1b6j3HdLuWyM8_MrkJwCkJIw';
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;

function updateAPIURLWithNewCount (picCount) {
  apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
}

// Check if all images were Loaded
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true
  }
}

// Create Elements for Links and Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to full photo
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',
    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // Event Listener, check when each image loaded is finished
    img.addEventListener('load', imageLoaded); 
     // Put <img> inside <a>, then put both inside imageContainer Element
     item.appendChild(img);
  })
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    if (isInitialLoad) {
      updateAPIURLWithNewCount(30);
      isInitialLoad = false;
    }
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();

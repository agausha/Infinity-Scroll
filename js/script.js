const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

// Variables
let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let isInitialLoad = true;

// Unsplash API
const apiKey = 'NIlze4okNpOKbHbn0mD1b6j3HdLuWyM8_MrkJwCkJIw';
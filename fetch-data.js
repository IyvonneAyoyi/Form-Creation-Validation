// Initialize the async function
async function fetchUserData() {
    // Define the API URL variable
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // Select data container element
  const dataContainer = document.getElementById('api-data');
  if (!dataContainer) {
    console.error('Element with ID "api-data" not found.');
    return;
  }

// Fetch data 
try {
const response = await fetch(apiUrl);
const users = await response.json();

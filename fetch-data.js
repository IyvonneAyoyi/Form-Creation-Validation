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

// Clear loading message
    dataContainer.innerHTML = '';

 // Create and append user list
    const userList = document.createElement('ul');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = user.name;
      userList.appendChild(li);
    });
    dataContainer.appendChild(userList);
    
    // Error Handling
    } catch (err) {
    dataContainer.innerHTML = '';
    dataContainer.textContent = 'Failed to load user data.';
    console.error('Error fetching user data:', err);
  }
}

// Invoke fetchUserData on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  fetchUserData();
});
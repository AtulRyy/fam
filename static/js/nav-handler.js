// Function to load navbar from navbar.html
function loadNavbar() {
    const navbarElement = document.getElementById('navbar');
    const xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          navbarElement.innerHTML = xhr.responseText;
        } else {
          console.error('Failed to load navbar.');
        }
      }
    };
  
    xhr.open('GET', '/static/components/navbar.html', true);
    xhr.send();
  }
  
  // Call the function to load the navbar
  loadNavbar();
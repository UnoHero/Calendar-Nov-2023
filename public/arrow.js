let currentPath = window.location.pathname;
let pathParts = currentPath.split('/');
let monthIndex = pathParts.indexOf('november');
let currentDateIndex = monthIndex + 1; // Index of the date in the path

document.addEventListener('keydown', function(e) {
  let currentDate = getCurrentDate();

  //Event listener for returning to the home page
  if (e.key === 'Escape') {
    window.location.replace('/november');
    return; // Stop further execution
  }

  // Convert the current date string to a number for manipulation
  let currentNumericDate = parseInt(currentDate, 10);

  if (e.key === 'ArrowLeft') {
    // Simulate moving to the previous date
    currentNumericDate -= 1;
    console.log(currentNumericDate);
  } else if (e.key === 'ArrowRight') {
    // Simulate moving to the next date
    currentNumericDate += 1;
    console.log(currentNumericDate);
  }

  // Update the URL with the new date
  window.location.assign(`/november/${currentNumericDate}`);
});

// Function to get the current date from the URL
function getCurrentDate() {
  if (currentDateIndex !== -1 && pathParts.length > currentDateIndex) {
    return pathParts[currentDateIndex];
  }
  return null;
}

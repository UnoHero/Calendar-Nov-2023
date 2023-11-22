let currentPath = window.location.pathname;
let pathParts = currentPath.split('/');
let monthIndex = pathParts.indexOf('november');
let currentDateIndex = monthIndex + 1; // Index of the date in the path
let today = parseInt(new Date().toISOString().split('-')[2].split('T')[0], 10); // Convert today to a number

let currentDate = parseInt(getCurrentDate(), 10); // Convert currentDate to a number
document.addEventListener('keydown', function(e) {
  
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

// Locking movement from date to locked date
if (currentDate > today) {
  console.log(today);
  window.location.replace(`/november/${today}`);
}

// Function to get the current date from the URL
function getCurrentDate() {
  if (currentDateIndex !== -1 && pathParts.length > currentDateIndex) {
    return pathParts[currentDateIndex];
  }
  return null;
}

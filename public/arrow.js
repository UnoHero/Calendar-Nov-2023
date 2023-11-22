//the code that makes it posible to use the arrow keys and the escape key to move.

let currentPath = window.location.pathname;
let pathParts = currentPath.split('/');
let monthIndex = pathParts.indexOf('november');
let currentDateIndex = monthIndex + 1; // Index of the date in the path
let today = parseInt(new Date().toISOString().split('-')[2].split('T')[0], 10); // Convert today to a number

// Convert currentDate to a number
let currentDate = parseInt(getCurrentDate(), 10); 

// this is an EventListemer so it listens to when a key goes down. it Reacts to Escape, LeftArrow and RightArrow.
document.addEventListener('keydown', function(e) {
  
  //Event listener for returning to the home page
  //if you press Escape
  if (e.key === 'Escape') {
    window.location.replace('/november');
    return; // Stop further execution
  }

  // Convert the current date string to a number for manipulation
  let currentNumericDate = parseInt(currentDate, 10);

  // if you press LeftArrow
  if (e.key === 'ArrowLeft') {
    // this if is made to stop you from going from main page and to the left and ending upp at 1.
    if (window.location.pathname === "/november") {
      return;
    } else {
      currentNumericDate -= 1;
    console.log(currentNumericDate);
    }
  }
  // if you press the RightArrow
  if (e.key === 'ArrowRight') {
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

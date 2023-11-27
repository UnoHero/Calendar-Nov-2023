// Function to handle the gesture
function handleGesture() {
    // Extract the current page number from the URL
    const pathParts = window.location.pathname.split('/');
    let currentPageNumber = parseInt(pathParts[pathParts.length - 1], 10);

    // Check if the current page number is a valid number
    if (isNaN(currentPageNumber)) {
        console.error("Invalid current page number");
        return;
    }

    // If the user swiped left or moved the mouse left
    if (endX < startX) {
        // Calculate the next page number, looping back to 1 if it exceeds 30
        const nextPage = currentPageNumber + 1 <= 30 ? currentPageNumber + 1 : 1;
        // Redirect to the next page
        window.location.pathname = `/november/${nextPage}`;
    } else if (endX > startX) { // If the user swiped right or moved the mouse right
        if (currentPageNumber === 1) {
            // If on the first page, redirect to the main page
            window.location.pathname = '/november';
        } else {
            // Calculate the previous page number
            const prevPage = currentPageNumber - 1;
            // Redirect to the previous page
            window.location.pathname = `/november/${prevPage}`;
        }
    }
}

// Set up event listeners for touch start
document.addEventListener('touchstart', e => {
    // Record the starting X position of the touch
    startX = e.changedTouches[0].screenX;
});

// Set up event listeners for touch end
document.addEventListener('touchend', e => {
    // Record the ending X position of the touch
    endX = e.changedTouches[0].screenX;
    // Handle the gesture based on the start and end positions
    handleGesture();
});

// Set up event listeners for mouse down
document.addEventListener('mousedown', e => {
    // Record the starting X position of the mouse
    startX = e.screenX;
    // Prevent default behavior like text selection
    e.preventDefault();
});

// Set up event listeners for mouse up
document.addEventListener('mouseup', e => {
    // Record the ending X position of the mouse
    endX = e.screenX;
    // Handle the gesture based on the start and end positions
    handleGesture();
});

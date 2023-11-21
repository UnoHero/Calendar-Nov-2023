// Global variables to store start and end positions
let startX = 0;
let endX = 0;

// Function to handle the gesture
function handleGesture() {
    const pathParts = window.location.pathname.split('/');
    let currentPageNumber = parseInt(pathParts[pathParts.length - 1], 10);

    if (isNaN(currentPageNumber)) {
        console.error("Invalid current page number");
        return;
    }

    if (endX < startX) { // Swiped left or mouse moved left
        const nextPage = currentPageNumber + 1 <= 30 ? currentPageNumber + 1 : 1;
        window.location.pathname = `/november/${nextPage}`;
    } else if (endX > startX) { // Swiped right or mouse moved right
        const prevPage = currentPageNumber - 1 >= 1 ? currentPageNumber - 1 : 30;
        window.location.pathname = `/november/${prevPage}`;
    }
}

// Event listeners for touch events
document.addEventListener('touchstart', e => {
    startX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    endX = e.changedTouches[0].screenX;
    handleGesture();
});

// Event listeners for mouse events
document.addEventListener('mousedown', e => {
    startX = e.screenX;
    e.preventDefault(); // Prevents default text selection behavior
});

document.addEventListener('mouseup', e => {
    endX = e.screenX;
    handleGesture();
});

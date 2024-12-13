// Select the custom cursor element
var crs = document.querySelector(".cursor");

// Update the cursor's position on mouse move
document.body.addEventListener("mousemove", function (e) {
    var x = e.clientX; // Get the cursor's X position
    var y = e.clientY; // Get the cursor's Y position

    // Update the position of the custom cursor
    crs.style.left = x + "px";
    crs.style.top = y + "px";
});

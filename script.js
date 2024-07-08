document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        const menuCols = document.querySelectorAll('.menupage-col');
        menuCols.forEach(col => col.classList.add('fade-in'));
    }, 100); // Adjust the delay as needed
});

// Add this script inside <script> tag in the HTML file or in a separate JS file

function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var toggleButton = document.querySelector(".toggle-button");

    if (navLinks.style.right === "-200px" || navLinks.style.right === "") {
        navLinks.style.right = "0";
        toggleButton.classList.add("open");
    } else {
        navLinks.style.right = "-200px";
        toggleButton.classList.remove("open");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var dropbtn = document.querySelector(".dropbtn");
    var arrowIcon = document.querySelector(".dropbtn .arrow");
    var dropdownContent = document.getElementById("dropdownContent");

    dropbtn.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = this.getAttribute("href"); // Redirect to what_we_do.html
    });

    arrowIcon.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event bubbling
        toggleDropdown();
    });

    var dropdownItems = document.querySelectorAll(".dropdown-content a");
    dropdownItems.forEach(function(item) {
        item.addEventListener("click", function() {
            dropdownContent.style.display = "none"; // Hide dropdown after clicking a link
            var href = this.getAttribute("href");
            window.location.href = href; // Redirect user to the specified href
        });
    });
});

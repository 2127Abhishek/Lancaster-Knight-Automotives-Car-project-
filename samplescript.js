// JavaScript to handle search functionality
document.getElementById("searchButton").addEventListener("click", function() {
    // Get the search input
    const searchQuery = document.getElementById("search").value.toLowerCase();

    // Redirect based on search input
    if (searchQuery === "Honda") {
        window.location.href = "honda.html"; // Replace with the actual file path for Honda
    } else if (searchQuery === "Toyota") {
        window.location.href = "toyota.html"; // Replace with the actual file path for Toyota
    } else if (searchQuery === "BMW") {
        window.location.href = "BMW.html"; // Replace with the actual file path for BMW
    } else {
        alert("No results found for: " + searchQuery); // Handle cases where the input doesn't match
    }
});
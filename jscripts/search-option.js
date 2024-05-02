// JavaScript for handling search functionality

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");
    const blogPosts = document.querySelectorAll(".blog-post");

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        const searchTerm = searchInput.value.trim().toLowerCase();

        // Loop through blog posts and hide/show based on search term
        blogPosts.forEach(function(post) {
            const title = post.querySelector("h3 a").innerText.toLowerCase();
            const content = post.querySelector(".blog-content").innerText.toLowerCase();
            if (title.includes(searchTerm) || content.includes(searchTerm)) {
                post.style.display = "block";
            } else {
                post.style.display = "none";
            }
        });
    });
});

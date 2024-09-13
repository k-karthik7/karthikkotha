//blog previews
document.addEventListener("DOMContentLoaded", function() {
    // Initialize an array to store the blog previews
    let blogPreviews = [
        { 
            id: 1,
            image: "image1.jpg",
            title: "Importance of having a portfolio website", 
            date: "August 30, 2024", 
            timeToRead: "5 min read",
            article: "importance-of-portfolio.html",
        },
        { 
            id: 2,
            image: "image2.jpg",
            title: "Git beyond push", 
            date: "September 02, 2024", 
            timeToRead: "5 min read",
            article: "telegram-scam.html",
        },
        { 
            id: 3,
            image: "image3.jpg",
            title: "Telegram :: The Homeground of multiple scams", 
            date: "September 09, 2024", 
            timeToRead: "5 min read",
            article: "telegram-scam.html",
            article: "telegram-scam.html",
        },
        
    ];
    
    // Function to display the previews
    function displayBlogPreviews() {
        const blogPreviewsContainer = document.getElementById('blog-previews');
        blogPreviewsContainer.innerHTML = ''; // Clear existing previews

        const currentURL = window.location.href;

        // Check if it's the home or blog page based on the domain
        const isHomePage = (currentURL.includes('karthikkotha.in') && !currentURL.includes('blog.karthikkotha.in')) || currentURL.includes('public');  // Home page: https://karthikkotha.in
        const isBlogPage = currentURL.includes('blog.karthikkotha.in') || currentURL.includes('/blog/');  // Blog page: https://blog.karthikkotha.in
    
        // Apply logic based on the detected page
        let previewsToShow;
        if (isHomePage) {
            previewsToShow = blogPreviews.slice(-4).reverse();  // Home page: Show the last 4 previews
            console.log('home detected');
            console.log(previewsToShow);
        } else if (isBlogPage) {
            previewsToShow = blogPreviews.reverse();            // Blog page: Show all in reverse order
            console.log('blog detected');
        } else {
            console.log('nothing detected fron url');
        }
    
        previewsToShow.forEach(preview => { // Get the last 3 previews
            const previewDiv = document.createElement('div');
            previewDiv.className = 'blog-preview';
            previewDiv.innerHTML = `
                <img src="../shared-assets/articles/${preview.id}/${preview.image}" alt="${preview.title}">
                <div class="preview-story">
                <div class="blog-title">
                <h4><a href="../shared-assets/articles/${preview.id}/${preview.article}" target="_blank">${preview.title}</a></h4>
                </div>
                <div class="details">
                    <span>${preview.date}</span>
                    <span>${preview.timeToRead}</span>
                </div>
                </div>
            `;
            blogPreviewsContainer.appendChild(previewDiv);
        });
    }
    
    // Function to add a new blog preview
    function addBlogPreview(id, image, title, date, timeToRead) {
        blogPreviews.push({ id, image, title, date, timeToRead });
        displayBlogPreviews(); // Update the display with the new preview
    }
    
    // Initial display of the previews
    displayBlogPreviews();
    
    
    });
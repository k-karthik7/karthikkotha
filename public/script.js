menu = document.querySelector(".menu-icon");
menu.onclick = function() {
    navItems = document.querySelector(".nav-middle");
    socials = document.querySelector(".nav-right");
    navItems.classList.toggle("active");
    socials.classList.toggle("active");
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    // this.txt = fullTxt.substring(0, this.txt.length + 1);
    const charArray = Array.from(fullTxt);
    this.txt = charArray.slice(0, this.txt.length + 1).join('');
    }

    this.el.innerHTML = '<span class="cursor"> '+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
};

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
    },
    { 
        id: 2,
        image: "image2.jpg",
        title: "Git beyond push", 
        date: "September 02, 2024", 
        timeToRead: "5 min read",
    },
    { 
        id: 3,
        image: "image3.jpg",
        title: "Telegram :: The Homeground of multiple scams", 
        date: "September 09, 2024", 
        timeToRead: "5 min read",
        article: "telegram-scam.html",
    },
    { 
        id: 2,
        image: "image2.jpg",
        title: "Git beyond push", 
        date: "September 02, 2024", 
        timeToRead: "5 min read",
    },
    { 
        id: 3,
        image: "image3.jpg",
        title: "Telegram :: The Homeground of multiple scams", 
        date: "September 09, 2024", 
        timeToRead: "5 min read",
        article: "telegram-scam.html",
    }
    
];

// Function to display the previews
function displayBlogPreviews() {
    const blogPreviewsContainer = document.getElementById('blog-previews');
    blogPreviewsContainer.innerHTML = ''; // Clear existing previews

    blogPreviews.slice(-4).reverse().forEach(preview => { // Get the last 3 previews
        const previewDiv = document.createElement('div');
        previewDiv.className = 'blog-preview';
        previewDiv.innerHTML = `
            <img src="articles/${preview.id}/${preview.image}" alt="${preview.title}">
            <div class="preview-story">
            <div class="blog-title">
            <h4><a href="articles/${preview.id}/${preview.article}" target="_blank">${preview.title}</a></h4>
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

// document.getElementById('viewAllBlogsButton').addEventListener('click', function() {
//     document.getElementById('about-section').style.display = 'none';
//     document.getElementById('contact-section').style.display = 'none';
//     document.getElementById('blog-section').style.display = 'none';
//     document.getElementById('skills-section').style.display = 'none';
//     document.getElementById('projects-section').style.display = 'none';

//     fetch('blog-content.html')
//         .then(response => response.text())
//         .then(data => {
//             document.getElementById('blog-list').innerHTML = data;
//         })
//         .catch(error => console.error('Error loading the blog content:', error));
// });

// function closeBlog() {
//     document.getElementById('blog-list').innerHTML = '';

//     document.getElementById('about-section').style.display = 'block';
//     document.getElementById('contact-section').style.display = 'block';
//     document.getElementById('blog-section').style.display = 'block';
//     document.getElementById('skills-section').style.display = 'block';
//     document.getElementById('projects-section').style.display = 'block';
// }

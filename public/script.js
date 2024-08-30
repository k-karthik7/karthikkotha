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

document.getElementById('viewAllBlogsButton').addEventListener('click', function() {
    // Hide other sections
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('contact-section').style.display = 'none';
    document.getElementById('blog-section').style.display = 'none';
    document.getElementById('skills-section').style.display = 'none';

    fetch('blog-content.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading the blog content:', error));
});

function closeBlog() {
    // Clear the blog content
    document.getElementById('content-container').innerHTML = '';

    // Show the main sections
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('contact-section').style.display = 'block';
    document.getElementById('blog-section').style.display = 'block';
    document.getElementById('skills-section').style.display = 'block';
}

document.getElementsByTagName("header")[0].innerHTML = "<h1>Chef Tingeling</h1> <nav> <ul> <li><a href='index.html'>Home</a></li><li><a href='booking.html'>Booking</a></li> <li><a href='about.html'>About</a></li>  </ul> </nav>";
document.getElementsByTagName("footer")[0].innerHTML = "<p>© 2021 Chef Tingeling</p>";

var h1Element = document.querySelector('section div ul li h1.lunch');
if (window.innerWidth <= 750 && window.innerWidth > 440) {
    h1Element.textContent = 'Lunch- servering';
} else if (window.innerWidth <= 440) {
    h1Element.textContent = 'Lunch';
}
else {
    h1Element.textContent = 'Lunchservering';
}

var h1Element = document.querySelector('section div ul li h1.middag');
if (window.innerWidth <= 850 && window.innerWidth > 440) {
    h1Element.textContent = 'Middags- servering';
} else if (window.innerWidth <= 440) {
    h1Element.textContent = 'Middag';
}
else {
    h1Element.textContent = 'Middagsservering';
}


window.addEventListener('resize', function () {
    var h1Element = document.querySelector('section div ul li h1.lunch');
    if (window.innerWidth <= 750 && window.innerWidth > 440) {
        h1Element.textContent = 'Lunch- servering';
    } else if (window.innerWidth <= 440) {
        h1Element.textContent = 'Lunch';
    }
    else {
        h1Element.textContent = 'Lunchservering';
    }
});
window.addEventListener('resize', function () {
    var h1Element = document.querySelector('section div ul li h1.middag');
    if (window.innerWidth <= 850 && window.innerWidth > 440) {
        h1Element.textContent = 'Middags- servering';
    } else if (window.innerWidth <= 440) {
        h1Element.textContent = 'Middag';
    }
    else {
        h1Element.textContent = 'Middagsservering';
    }
});
document.getElementsByTagName("header")[0].innerHTML = "<h1>Chef Tingeling</h1> <nav> <ul> <li><a href='index.html'>Home</a></li><li><a href='menu.html'>Menu</a></li><li><a href='booking.html'>Booking</a></li> <li><a href='about.html'>About</a></li>  </ul> </nav>";
document.getElementsByTagName("footer")[0].innerHTML = "<p>© 2021 Chef Tingeling</p>";

window.onload = function () {
    var h1Element = document.querySelector('section div ul li h1.lunch');
    if (h1Element != null) {
        if (window.innerWidth < 440) {
            h1Element.textContent = 'Lunch';

        } else if (window.innerWidth < 750) {
            h1Element.textContent = 'Lunch- servering';

        }

    }

    var h1Element = document.querySelector('section div ul li h1.middag');
    if (h1Element != null) {
        if (window.innerWidth < 440) {
            h1Element.textContent = 'Middag';

        } else if (window.innerWidth < 850) {
            h1Element.textContent = 'Middags- servering';

        }

    }

    var h1Element = document.querySelector('section div ul h1.welcome');
    if (h1Element != null) {
        if (window.innerWidth < 420) {
            h1Element.textContent = 'Välkom -men';
        }
        else if (window.innerWidth < 570) {
            h1Element.textContent = 'Välkom-men';


        }
    }

    var h1Element = document.querySelector('h1.lunchmeny');
    if (h1Element != null) {
        if (window.innerWidth < 670) {
            h1Element.textContent = 'Lunch';
        }

    }
    var h1Element = document.querySelector('h1.middagsmeny');
    if (h1Element != null) {
        if (window.innerWidth < 670) {
            h1Element.textContent = 'Middag';
        }

    }
}

window.addEventListener('resize', function () {
    var h1Element = document.querySelector('section div ul li h1.lunch');
    if (window.innerWidth < 440) {
        h1Element.textContent = 'Lunch';

    } else if (window.innerWidth < 750) {
        h1Element.textContent = 'Lunch- servering';

    }
    else {
        h1Element.textContent = 'Lunchservering';
    }
});
window.addEventListener('resize', function () {
    var h1Element = document.querySelector('section div ul li h1.middag');
    if (window.innerWidth < 440) {
        h1Element.textContent = 'Middag';

    } else if (window.innerWidth < 850) {
        h1Element.textContent = 'Middags- servering';

    }
    else {
        h1Element.textContent = 'Middagsservering';
    }
});

window.addEventListener('resize', function () {
    var h1Element = document.querySelector('section div ul h1.welcome');

    if (window.innerWidth < 420) {
        h1Element.textContent = 'Välkom -men';
    }
    else if (window.innerWidth < 570) {
        h1Element.textContent = 'Välkom-men';

    } else {
        h1Element.textContent = 'Välkommen till Chef Tingeling';
    }
});

window.addEventListener('resize', function () {
    var h1Element = document.querySelector('h1.lunchmeny');
    if (h1Element != null) {
        if (window.innerWidth < 670) {
            h1Element.textContent = 'Lunch';
        }
        else {
            h1Element.textContent = 'Lunchmeny';
        }
    }
});

window.addEventListener('resize', function () {
    var h1Element = document.querySelector('h1.middagsmeny');
    if (h1Element != null) {
        if (window.innerWidth < 670) {
            h1Element.textContent = 'Middag';
        }
        else {
            h1Element.textContent = 'Middagsmeny';
        }
    }
});
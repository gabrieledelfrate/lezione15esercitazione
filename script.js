let bottone1 = document.getElementById("topButton")

window.onscroll = function () {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        bottone1.style.display = "block";
    } else {
        bottone1.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
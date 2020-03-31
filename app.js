import {MDCRipple} from '@material/ripple';

const fabRipple = new MDCRipple(document.querySelector('.mdc-fab'));

//theme switcher
const toggleSwitch = document.getElementById("button-theme");
const currentTheme = localStorage.getItem('theme');
var body = document.body;

if (currentTheme) {
    body.classList.add(currentTheme);

    if (currentTheme === 'dark') {
        body.classList.remove('light');
        document.getElementById("dark-on").style.display = "block";
        document.getElementById("light-on").style.display = "none";
    }
}

// toggleSwitch.addEventListener("onclick", console.log("clicked"))
toggleSwitch.onclick = function(){if (localStorage.getItem('theme') === 'light') {
    body.classList.add('dark');
    body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
    document.getElementById("dark-on").style.display = "block";
    document.getElementById("light-on").style.display = "none";
} else {
    body.classList.add('light');
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    document.getElementById("dark-on").style.display = "none";
    document.getElementById("light-on").style.display = "block";
}};

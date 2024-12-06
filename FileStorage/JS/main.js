// function DarkMode(){
// let  body =document.getElementsByName('body')
//
// }


// function cookie_melding_Accept(){
//     console.log("Clicked Accept")
//     document.getElementById("Cookie-Melding").style.display = "none"
//
// }
//
// function cookie_melding_Reject(){
//     console.log("Clicked Reject")
//     document.getElementById("Cookie-Melding").style.display = "none"
// }
let x = false
function Cookie_Melding(x) {
    let CookieMelding = document.getElementById("Cookie-Melding")

    if (x === true) {
        console.log("Clicked Accept")
        alert("You have clicked Accept")
        CookieMelding.style.display = "none"
        return "true"

    } else if (x === false) {
        CookieMelding.style.display = "none"
        console.log("Clicked Reject")
        alert("You have clicked Reject mortal.")
        alert("You shall now pay the price for rejecting our forced spying on you")
        alert("I'm joking, enjoy the site.")


        return "true"
    }
}


function DarkMode() {
    let element = document.body
    element.classList.toggle('Dark_Mode')
    if (element.classList.contains('Dark_Mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

function changeCss() {
    let stylesheet = document.getElementById("StyleSheeting")
    let button = document.getElementById("EnableMenu")
    if (window.innerWidth <= 600) {
        stylesheet.href = "../Css/mobileCss.css";
        button.style.display = "flex"

    } else if (window.innerWidth >= 601) {
        stylesheet.href = "../Css/main.css";
        button.style.display = "none"
    }
}

window.addEventListener("load", changeCss)
window.addEventListener("resize", changeCss)


function toggleMenu() {
    const menu = document.getElementById("NavBar");

    // Toggle menu visibility
    if (menu.classList.contains("menuHidden")) {
        menu.classList.remove("menuHidden");
        menu.classList.add("ToggleMenu");
    } else {
        menu.classList.remove("ToggleMenu");
        menu.classList.add("menuHidden");
    }

}


// Apply the saved dark mode state on page load
window.onload = function () {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('Dark_Mode');
    }
    let date = new Date().getHours()
    let h1 = document.getElementById("TimeChange")
    if (date >= 21) {
        h1.innerText = "Good Night"
    } else if (date >= 17) {
        h1.innerText = "Good Evening"
    } else if (date >= 12) {
        h1.innerText = "Good Afternoon"
    } else if (date >= 6) {
        h1.innerText = "Good Morning"
    }

}

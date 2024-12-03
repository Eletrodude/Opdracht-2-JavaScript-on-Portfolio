

// function DarkMode(){
// let  body =document.getElementsByName('body')
//
// }


function cookie_melding_Accept(){
    console.log("Clicked Accept")
    document.getElementById("Cookie-Melding").style.display = "none"
}

function cookie_melding_Reject(){
    console.log("Clicked Reject")
    document.getElementById("Cookie-Melding").style.display = "none"
}


function DarkMode(){
  let element = document.body
    element.classList.toggle('Dark_Mode')
    if (element.classList.contains('Dark_Mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Apply the saved dark mode state on page load
window.onload = function () {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('Dark_Mode');
    }




}
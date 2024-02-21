$(function(){
    $(".navbar").load("menu.html");
    document.body.setAttribute('theme', 'light');
})

const btn = document.getElementById("modeToggle");
const currentTheme = localStorage.getItem('theme');

btn.addEventListener('click', ()=>{
    setTheme();
})
function setTheme(){
    let currentTheme = document.body.getAttribute('theme');
    if(currentTheme === 'light'){
        setDarkMode();
    }else{
        setLightMode();
    }
}
function setDarkMode(){
    document.body.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById("themeButton").src="./resources/images/iconLight.png";
};
function setLightMode(){
    document.body.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light');
    document.getElementById("themeButton").src="./resources/images/iconDark.png";
};

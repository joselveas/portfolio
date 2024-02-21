$(function(){
    $(".navbar").load("menu.html");
    let onpageLoad = localStorage.getItem('theme');
    localStorage.setItem('theme', onpageLoad);
    if(onpageLoad === 'dark'){
        setTheme('light')
    }else{
        setTheme('dark')
    }
});

const btn = document.getElementById("themeButton");

btn.addEventListener('click', ()=>{
    let onpageLoad = localStorage.getItem('theme');
    setTheme(onpageLoad);
});

function setTheme(onpageLoad){
    if(onpageLoad === 'light'){
        document.body.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
        document.getElementById("themeButton").src="./resources/images/iconLight.png";
    }else{
        document.body.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
        document.getElementById("themeButton").src="./resources/images/iconDark.png";
    }
}
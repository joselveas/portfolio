$(function(){
    let onpageLoad = localStorage.getItem('theme');
    localStorage.setItem('theme', onpageLoad);
    if(onpageLoad === 'dark'){
        setTheme('light')
        document.getElementById("themeButton").src="./resources/images/iconLight.png";
    }else{
        setTheme('dark')
        document.getElementById("themeButton").src="./resources/images/iconDark.png";
    }
});

const btnTheme = document.getElementById("themeChooser");

btnTheme.addEventListener('click', ()=>{
    let onpageLoad = localStorage.getItem('theme');
    if(onpageLoad === 'light'){
        document.getElementById("themeButton").src="./resources/images/iconLight.png";
    }else{
        document.getElementById("themeButton").src="./resources/images/iconDark.png";
    }
    setTheme(onpageLoad);
});

function setTheme(onpageLoad){
    if(onpageLoad === 'light'){
        document.body.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    }
};
$(function(){
    let onpageLoad = localStorage.getItem('theme');
    if(onpageLoad === 'dark'){
        document.getElementById("themeButton").src="./resources/images/iconLight.png";
    }else{
        document.getElementById("themeButton").src="./resources/images/iconDark.png";
    }
});

const btn = document.getElementById("themeChooser");

btn.addEventListener('click', ()=>{
    let onpageLoad = localStorage.getItem('theme');
    if(onpageLoad === 'light'){
        document.getElementById("themeButton").src="./resources/images/iconLight.png";
    }else{
        document.getElementById("themeButton").src="./resources/images/iconDark.png";
    }
    setTheme(onpageLoad);
});


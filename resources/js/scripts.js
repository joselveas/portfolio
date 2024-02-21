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

function setTheme(onpageLoad){
    if(onpageLoad === 'light'){
        document.body.setAttribute('theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }else{
        document.body.setAttribute('theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
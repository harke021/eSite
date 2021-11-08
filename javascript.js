var loginForm = document.getElementById("loginForm");
var rgForm = document.getElementById("rgForm");
var indicater = document.getElementById("indicater");

function register(){
    rgForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicater.style.transform = "translateX(100px)";

}
function login(){
    rgForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicater.style.transform = "translateX(0px)";

}
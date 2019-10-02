const In=document.getElementById("in");
const Up=document.getElementById("up");
const splash=document.getElementById('sign-cont');

In.addEventListener("click",()=>{
    signIn.style.display="flex";
    signUp.style.display="none";
    splash.style.display="none";
})

Up.addEventListener("click",()=>{
    signUp.style.display="flex";
    signIn.style.display="none";
    splash.style.display="none";
})
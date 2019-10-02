const In=document.getElementById("in");
const Up=document.getElementById("up");
const In1=document.getElementById("in1");
const Up1=document.getElementById("up1");
const splash=document.getElementById('sign-cont');

signIn.style.display="none";
signUp.style.display="none";

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

In1.addEventListener("click",()=>{
    signIn.style.display="flex";
    signUp.style.display="none";
    splash.style.display="none";
})

Up1.addEventListener("click",()=>{
    signUp.style.display="flex";
    signIn.style.display="none";
    splash.style.display="none";
})
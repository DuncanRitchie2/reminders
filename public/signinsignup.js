console.log("Hello from signinsignup.js!")

const In=document.getElementById("in");
const Up=document.getElementById("up");
const In1=document.getElementById("in1");
const Up1=document.getElementById("up1");
const splash=document.getElementById('sign-cont');
const signInDiv=document.getElementById("signInDiv");
const signUpDiv=document.getElementById("signUpDiv");

signInDiv.style.display="none";
signUpDiv.style.display="none";

In.addEventListener("click",()=>{
    signInDiv.style.display="flex";
    signUpDiv.style.display="none";
    splash.style.display="none";
})

Up.addEventListener("click",()=>{
    signUpDiv.style.display="flex";
    signInDiv.style.display="none";
    splash.style.display="none";
})

In1.addEventListener("click",()=>{
    signInDiv.style.display="flex";
    signUpDiv.style.display="none";
    splash.style.display="none";
})

Up1.addEventListener("click",()=>{
    signUpDiv.style.display="flex";
    signInDiv.style.display="none";
    splash.style.display="none";
})
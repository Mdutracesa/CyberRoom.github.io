const signUpButton=document.getElementById('SignUpButton');
const loginButton=document.getElementById('loginBotton');
const loginForm=document.getElementById('login');
const signUpForm=document.getElementById('signUp');

signUpButton.addEventListener('click',function(){
    loginForm.style.display='none';
    signUpForm.style.display='block';
})
loginButton.addEventListener('click',function(){
    loginForm.style.display='block';
    signUpForm.style.display='none';
})
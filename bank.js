document.getElementById('login-submit').addEventListener('click', function (event){
    event.preventDefault();
    const emailfield = document.getElementById('my-email');
    const userEmail = emailfield.value;
    const passwordfield = document.getElementById('my-password');
    const mypassword = passwordfield.value;
    if(userEmail == 'mahmudul' && mypassword == 'hasan'){
        window.location.href="banking.html";
    }
});
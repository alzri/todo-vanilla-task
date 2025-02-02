const showHideIcon = document.querySelectorAll('.show-hide-icon');
const signInLink = document.getElementById('signin-link');
const logInLink = document.getElementById('login-link');

showHideIcon.forEach((icon) => {
    icon.addEventListener("click", function() {
        let getPasswordInput = icon.parentElement.querySelector("input");

        if(getPasswordInput.type === "password") {
            getPasswordInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPasswordInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

logInLink.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById('signin-form').classList.add('hidden-form');
    document.getElementById('login-form').classList.remove('hidden-form');
});

signInLink.addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden-form');
    document.getElementById('signin-form').classList.remove('hidden-form');
});
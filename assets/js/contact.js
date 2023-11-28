


// SIGN UP CREATE FUNCTION RETURN ALERT WHEN THE FORM NO DATA

// signBtn.addEventListener("click", function() {
//     if(userName.value === "" || email.value === "" || pass.vale === "" || conPass === "") {
//         alert("Please Fill Data");
//     }else {
        

//         setTimeout( () => {
//             window.location = "index.html";
//         }, 1500);
//     };
// });








let form = document.querySelector("form"),
    emailField = form.querySelector(".email-field"),
    emailInput = emailField.querySelector(".email"),
    passField = form.querySelector(".create-password"),
    passInput = passField.querySelector(".password"),
    cPassField = form.querySelector(".confirm-password"),
    cPassInput = cPassField.querySelector(".cPassword"),
    submit = document.getElementById("submit");

// EMAIL VALIDATION
function checkEmail() {
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emailPattern)) {
       return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}

// Hide / Show Password
let eyeIcons = document.querySelectorAll(".show-hide");
eyeIcons.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pInput = eyeIcon.parentElement.querySelector("input");
        if(pInput.type === "password") {
        eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
            return pInput.type = "text";
        }
        eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
        return pInput.type = "password";
    });
});

// Password Validation
function createPass() {
    let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

    if(!passInput.value.match(passPattern)) {
       return passField.classList.add("invalid");
    }
       return passField.classList.remove("invalid");

};



// Confirm Password Validation
function confirmPass() {
    if(passInput.value !== cPassInput.value || cPassInput.value === "") {
       return cPassField.classList.add("invalid");
    } 
    cPassField.classList.remove("invalid");
}



// Calling Function On Form Submit
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkEmail();
    createPass();
    confirmPass();

    // Calling Function On Key Up
    emailInput.addEventListener("keyup", checkEmail);
    passInput.addEventListener("keyup", createPass);
    cPassInput.addEventListener("keyup", confirmPass);

    if(
     !emailField.classList.contains("invalid") &&
     !passField.classList.contains("invalid") &&
     !cPassField.classList.contains("invalid") 
    ) {
        setTimeout( () => {
            window.location = "index.html";
        }, 1500);
    }
});
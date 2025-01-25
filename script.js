function displayFormData() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const password = document.getElementById("password").value;
    const subject = document.getElementById("subject").value;
    const comment = document.getElementById("comment").value;
    const agree = document.getElementById("agree").checked;

    const errors = validateFormData(name, email, address, password, subject, agree);
    if (!errors.isValid) {
        return false;
    }

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Degree:</strong> ${subject}</p>
        <p><strong>College:</strong> ${comment}</p>
    `;

    return false; // Prevent actual form submission
}

function validateFormData(name, email, address, password, subject, agree) {
    const nameErr = document.getElementById("nameerror");
    const mailErr = document.getElementById("mailerror");
    const addressErr = document.getElementById("adderror");
    const passErr = document.getElementById("passerror");
    const subjectErr = document.getElementById("subject-error");
    const agreeErr = document.getElementById("agreeerror");

    nameErr.textContent = "";
    mailErr.textContent = "";
    addressErr.textContent = "";
    passErr.textContent = "";
    subjectErr.textContent = "";
    agreeErr.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameErr.textContent = "Please enter a valid name.";
        isValid = false;
    }
    if (email === "" || !email.includes("@") || !email.includes(".")) {
        mailErr.textContent = "Please enter a valid email.";
        isValid = false;
    }
    if (address === "") {
        addressErr.textContent = "Please enter your address.";
        isValid = false;
    }
    if (password === "" || password.length < 6) {
        passErr.textContent = "Password must be at least 6 characters.";
        isValid = false;
    }
    if (subject === "") {
        subjectErr.textContent = "Please select a degree.";
        isValid = false;
    }
    if (!agree) {
        agreeErr.textContent = "You must agree to the terms.";
        isValid = false;
    }

    return { isValid };
}


function resetError() {
    document.querySelectorAll(".error-message").forEach((span) => {
        span.textContent = "";
    });
    document.getElementById("result").innerHTML = "";
}
const togglePasswordButton = document.getElementById("togglePasswordButton");
const passwordInput = document.getElementById("password");
function togglePasswordVisibility(){
if(passwordInput.type === 'password'){
    passwordInput.type = "text";
    togglePasswordButton.textContent = "HidePassword";
}else{
    passwordInput.type = "password";
    togglePasswordButton.textContent = "ShowPassword";
}
}
togglePasswordButton.addEventListener('click',togglePasswordVisibility);
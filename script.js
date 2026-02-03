let verificationCode = "";
let resetCode = "";

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function sendCode() {
    verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Verification code sent to email (SIMULATED): " + verificationCode);
}

function register() {
    let user = regUser.value.trim();
    let email = regEmail.value.trim();
    let pass = regPass.value;
    let confirm = regConfirm.value;
    let code = regCode.value;
    let role = regRole.value;

    if (!user || !email || !pass) {
        regMsg.innerText = "All fields required";
        return;
    }

    if (pass !== confirm) {
        regMsg.innerText = "Passwords do not match";
        return;
    }

    if (code !== verificationCode) {
        regMsg.innerText = "Invalid verification code";
        return;
    }

    let users = getUsers();
    users.push({ user, email, pass, role });
    saveUsers(users);

    regMsg.innerText = "Account created successfully";
}

function login() {
    let u = loginUser.value;
    let p = loginPass.value;

    let user = getUsers().find(x => x.user === u && x.pass === p);
    if (!user) {
        loginError.innerText = "Invalid login";
        return;
    }

    showScreen("userDashboard");
}

function googleLogin() {
    alert("Google login successful (SIMULATED)");
    showScreen("userDashboard");
}

function sendResetCode() {
    resetCode = Math.floor(100000 + Math.random() * 900000).toString();
    alert("Reset code sent to email (SIMULATED): " + resetCode);
}

function resetPassword() {
    let email = resetEmail.value;
    let code = resetCodeInput = resetCode;
    let newPass = newPassInput = newPass.value;

    if (resetCode !== document.getElementById("resetCode").value) {
        resetMsg.innerText = "Invalid reset code";
        return;
    }

    let users = getUsers();
    let user = users.find(u => u.email === email);
    if (!user) {
        resetMsg.innerText = "Email not found";
        return;
    }

    user.pass = newPass;
    saveUsers(users);

    resetMsg.innerText = "Password reset successful";
}

function logout() {
    showScreen("loginScreen");
}

showScreen("loginScreen");

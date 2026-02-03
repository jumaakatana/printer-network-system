function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });
}

function showScreen(id) {
    hideAllScreens();
    document.getElementById(id).style.display = 'block';
}

function login() {
    let user = document.getElementById('username').value;
    let pass = document.getElementById('password').value;

    if (user === "admin" && pass === "1234") {
        showScreen('adminDashboard');
    } 
    else if (user === "user" && pass === "1234") {
        showScreen('userDashboard');
    } 
    else {
        document.getElementById('loginError').innerText = "Invalid login details";
    }
}

function logout() {
    hideAllScreens();
    showScreen('loginScreen');
}

showScreen('loginScreen');

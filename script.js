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

function register() {
    let username = regUser.value.trim();
    let password = regPass.value.trim();
    let role = regRole.value;

    if (!username || !password) {
        regMsg.innerText = "All fields are required";
        return;
    }

    let users = getUsers();

    if (users.some(u => u.username === username)) {
        regMsg.innerText = "Username already exists";
        return;
    }

    users.push({ username, password, role });
    saveUsers(users);

    regMsg.innerText = "Account created successfully";
    regUser.value = "";
    regPass.value = "";
}

function login() {
    let username = loginUser.value.trim();
    let password = loginPass.value.trim();

    let users = getUsers();
    let user = users.find(u => u.username === username && u.password === password);

    if (!user) {
        loginError.innerText = "Invalid username or password";
        return;
    }

    if (user.role === "admin") {
        showScreen("adminDashboard");
    } else {
        showScreen("userDashboard");
    }
}

function logout() {
    showScreen("loginScreen");
}

showScreen("loginScreen");

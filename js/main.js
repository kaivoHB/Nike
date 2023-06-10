let login = document.getElementById("login");
let register = document.getElementById("register");
// let forms = document.getElementsByClassName("forms")[0];
let loginForm = document.getElementsByClassName("Login")[0];
let registerForm = document.getElementsByClassName("Register")[0];
let cancelLogin = document.getElementById("cancelLogin");
let cancelRegister = document.getElementById("cancelRegister");

// Login
login.onclick = function () {
    loginForm.style.display = "block";
};

cancelLogin.onclick = function () {
    loginForm.style.display = "none";
}

function checkLogin() {
  let user = document.getElementById("user").value;
  let pw = document.getElementById("password").value;

  if (user != "admin" && pw != "123456") {
    alert("Tài khoản không tồn tại!");
  } else if (user != "admin") {
    alert("Sai tài khoản!");
  } else if (pw != "123456") {
    alert("Sai mật khẩu!");
  } else if (user == "admin" && pw == "123456") {
    alert("Đăng nhập thành công!");
  }
}

// Register
register.onclick = function () {
    registerForm.style.display = "block";
};

cancelRegister.onclick = function () {
    registerForm.style.display = "none";
}

function checkLogin() {
    //    
}
let username = document.getElementById('userRegister');
let password = document.getElementById('passwordRegister');

function Register() {
    if(username.value === '' || password.value === ''){
        alert('Pls! complete your info.')
    }else{
        document.cookie = `user=${username.value}; expires=Sun, 31 Dec 2022 12:00:00 UTC`;
        document.cookie = `pass=${password.value}; expires=Sun, 31 Dec 2022 12:00:00 UTC`;
        alert('Success!')
    }
}
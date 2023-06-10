let ten = '';
let mk = '';

function Login(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    // console.log(ca);
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    ten = ca[0].slice(5,100);
    mk = ca[1].slice(6,100);
    }
    // console.log(ten)
    // console.log(mk)
    if(document.getElementById('userLogin').value == ten && document.getElementById('passwordLogin').value == mk){
        alert('Success!')
    }else{
        alert('Error! Wrong username or password.')
    }
}
function submitform(e) {
    e.preventDefault()

    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;
    s(username, password);
}
let login_DETAILS = JSON.parse(localStorage.getItem("myAdress:"));
console.log(login_DETAILS)



function s(p, a) {
    var x = user(p, a);



    if (x == true) {
        myFunction();
        alert("Successfully logged in redirecting to home page");


    } else {
        alert("UserName and Password does not match");
    }
}

function user(p, a) {
    return login_DETAILS.some(function (el) {
        if (el.username === p && el.password === a) {
            return true;
        };
    });
}

function myFunction() {
    window.location.href = "finalpage.html";
}
function signup() {
    window.location.href = "signup.html";
}
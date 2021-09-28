var login_DETAILS = [];
if (localStorage.getItem("myAdress:") === null) {


    localStorage.setItem("myAdress:", JSON.stringify([]));


}
function submitform(e) {
    e.preventDefault()
    if (document.getElementById('Password').value === document.getElementById('repet').value) {

        let na = document.getElementById('Name').value;
        let nb = document.getElementById('Email').value

        let cart_values = userExists(na, nb);

        if (cart_values == true) {

            alert("user already exists");
        } else {
            const ad = {
                username: document.getElementById('Name').value,
                password: document.getElementById('Password').value,
                email: document.getElementById('Email').value,
            };
            login_DETAILS.push(ad);
            const address_json = JSON.stringify(login_DETAILS)
            localStorage.setItem("myAdress:", address_json);
            myFunction()
        }
    } else {
        alert("password does not match")
    }
}

function myFunction() {
    window.location.href = "../LOG IN/login.html";
}

let cart_data = JSON.parse(localStorage.getItem("myAdress:"));
function userExists(p, a) {
    return cart_data.some(function (el) {
        if (el.username === p && el.email === a) {
            return true
        };
    });
}
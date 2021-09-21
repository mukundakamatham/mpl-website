
    function showdata() {
        var display_one_ip = document.getElementById('display_one_ip').value
        var display_one = document.getElementById('display_one')
        if (display_one_ip.trim() != '' && display_one_ip.length == 10) {
            display_one.textContent = "Sending Link " + display_one_ip
            setTimeout(function () {
                display_one.textContent = "We have sent the MPL App Download link to " + display_one_ip + ". Check your phone now!"
            }, 3000)
        }
        else if (display_one_ip.trim().length != 10) {
            alert("Enter a valid Number")
        }
    }
    // showdata()






    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "less";
            moreText.style.display = "inline";
        }
    }
    function down() {
        if (document.getElementById("down").className == "arrow down") {
            ShowAndHide();

            document.getElementById("down").className = "arrow up";

        } else {
            document.getElementById("down").className = "arrow down"
            ShowAndHide();
        }
    }
    function ShowAndHide() {
        var x = document.getElementById('mynav');
        if (x.style.display == 'none') {
            x.style.display = 'block';
        } else {
            x.style.display = 'none';
        }
    }
    function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
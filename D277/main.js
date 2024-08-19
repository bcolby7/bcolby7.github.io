document.getElementById('emailVerify').addEventListener("blur", function() {
    var email = document.getElementById('email').value;
    var emailVerify = document.getElementById('emailVerify').value;

    if (email !== emailVerify) {
        alert('Email addresses do not match.');
    }
})
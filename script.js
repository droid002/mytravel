function welcome() {
    alert("Welcome to Travel World!");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
        return false;
    }
    alert("Thank you for contacting us!");
    return true;
}
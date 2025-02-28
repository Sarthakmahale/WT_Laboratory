function validateForm() {
    let roll = document.getElementById("roll").value;
    let name = document.getElementById("name").value;
    let classValue = document.getElementById("class").value;
    let div = document.getElementById("div").value;
    let mob = document.getElementById("mob").value;
    let email = document.getElementById("email").value;

    if (!/^\d+$/.test(roll)) {
        alert("Roll No must contain only numbers.");
        return false;
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Name must contain only letters and spaces.");
        return false;
    }

    if (classValue.trim() === "") {
        alert("Class field cannot be empty.");
        return false;
    }

    if (!/^[A-Za-z]$/.test(div)) {
        alert("Division must be a single letter (A-Z or a-z).");
        return false;
    }

    if (!/^\d{10}$/.test(mob)) {
        alert("Mobile number must be exactly 10 digits.");
        return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

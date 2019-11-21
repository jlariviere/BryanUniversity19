const form = document.getElementById("myForm")
form.addEventListener("submit", () => {
    for (let i = 0; i < form.food.length; i++) {
        const checkedInputs = []
        if (form.food[i].checked) {
            checkedInputs.push(form.food[i].value)
        }
        alert("First Name:" + `${form.fName.value}` +
            "\nLast Name: " + `${form.lName.value}` +
            "\nAge: " + `${form.age.value}` +
            "\nGender: " + `${form.gender.value}` +
            "\nLocation: " + `${form.city.value}` +
            "\nDietary restriction: " + `${checkedInputs}`)
    }
})
let form = document.passengerInfo
  
form.addEventListener("submit", (event) => {
    event.preventDefault()
    let a= form.fName.value
    let b= form.lName.value
    let c= form.age.value
    let d= form.gender.value
    let e= form.location.value

    for(let i = 0; i < form.food.length; i++){
 let checkedInputs = []
  

        if(form.food[i].checked){
            checkedInputs.push(form.food[i].value)
        }
   
    }

    
    alert("First name: " + a +
        "\n Last name: "+ b +
        "\n Age " + c +
        "\n Gender: "+ d +
        "\n location: " + e +
        "\n  Dietary restrictions: " + checkedInputs);

}) 

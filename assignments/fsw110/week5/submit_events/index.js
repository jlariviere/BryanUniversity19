const form = document.myForm

form.addEventListener("submit",function (event) {
   let fName= form.firstName.value
   let lName=form.lastName.value
   let email=form.email.value
   alert(fName + "" + lName +" "+ email) 
   
 
})



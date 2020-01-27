 //show 
 axios.get("https://api.vschool.io/[james_lar]/todo")
.then(response => {
    console.log(response)
    for(let i = 0; i < response.data.length; i++){
        const box=document.createElement("input")
        const h1 = document.createElement('h1')
        const h2 = document.createElement("h2")
        const h3 = document.createElement('h3')
        const h4 = document.createElement("h4")
        const entries = Object.entries(response.data[i])
       // h1.textContent = entries
       
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
        h2.textContent = response.data[i].description
        document.body.appendChild(h2)
        h3.textContent =`$ ${ response.data[i].price}`
        document.body.appendChild(h3)
        h4.textContent = `Id: ${response.data[i]._id}`
        document.body.appendChild(h4) 
        box.type="checkbox"
        document.body.appendChild(box)
    }
})

//post and show data
const todoForm = document.todoform
todoForm.addEventListener("submit", function(event){
     event.preventDefault()
    let inputTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value
    }
    axios.post("https://api.vschool.io/[james_lar]/todo", inputTodo)
    // .then(responce=>{
    //     axios.get("https://api.vschool.io/[james_lar]/todo")
    //     .then(response => {
    //         for(let i = 0; i < response.data.length; i++){
    //             const h1 = document.createElement('h1')
    //             const values = Object.values(response.data[i])
    //           // h1.textContent = values
    //             h1.textContent = response.data[i].title
    //             document.body.appendChild(h1)
    //         }
    //     })
    // })
})

//put

const update= document.getElementById("update")
update.addEventListener("click", function(){
    let todoId = todoForm.todoId.value
    let inputTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
        price: todoForm.price.value,
        imgUrl: todoForm.imgUrl.value}
    axios.put(`https://api.vschool.io/[james_lar]/todo/${todoId}`,inputTodo)
})


//delete 
// const deleteForm = document.deleteform
// deleteForm.addEventListener("submit",function(event){
//     event.preventDefault()
//     const deleteId = deleteForm.deleteId.value
//     axios.delete("https://api.vschool.io/[james_lar]/todo/"+deleteId)//right here<<
// })
const button = document.getElementById('delete-button')
button.addEventListener("click",function(){
    let todoId = todoForm.todoId.value
    axios.delete(`https://api.vschool.io/[james_lar]/todo/${todoId}`)
})

.catch(error => console.log(error))
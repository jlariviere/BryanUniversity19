 //show 
 axios.get("https://api.vschool.io/[james_lar]/todo")
.then(response => {
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        const entries = Object.entries(response.data[i])
        h1.textContent = entries
       // h1.textContent = response.data[i].title
        document.body.appendChild(h1)
    }
})

//post and show data
const todoForm = document.todoform
todoForm.addEventListener("submit", function(event){
     event.preventDefault()
    let inputTodo = {
        title: todoForm.title.value,
        description: todoForm.description.value,
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

//  todo = async()=>{
//      try{
//          const getOne="https://api.vschool.io/[james_lar]/todo"
//          const getTwo= "https://rickandmortyapi.com/api/character/1"
//          .then(response=>{
//              console.log(response)
//             for(let i = 0; i < getOne.response.data.length; i++){
//                 const box=document.createElement("input")
//                 const h1 = document.createElement('h1')
//                 const h2 = document.createElement("h2")
//                 const h3 = document.createElement('h3')
//                 const h4 = document.createElement("h4")
//                 const entries = Object.entries(response.data[i])
//                 h1.textContent = getOne.response.data[i].title
//                 document.body.appendChild(h1)
//                 h2.textContent = getOne.response.data[i].description
//                 document.body.appendChild(h2)
//                 h3.textContent =`$ ${ getOne.response.data[i].price}`
//                 document.body.appendChild(h3)
//                 h4.textContent = `Id: ${getOne.response.data[i]._id}`
//                 document.body.appendChild(h4) 
//                 box.type="checkbox"
//                 document.body.appendChild(box)
//                 const ul = document.createElement('ul')
//                 ul.textContent=getTwo.response.data.name
//                 document.body.appendChild(ul)
//          }
//      })
//      return response;
//  }
// catch (error) {console.log(error)}}
// NO GOOD ^^^^^^
//    axios.get("https://rickandmortyapi.com/api/character/1")   
// .then(response=>{
//     console.log(response)
//     const last=response.data.name
//    //  axios.get("https://api.vschool.io/[james_lar]/todo")
//    //cant .then chain together^^^^
//     }      
// )
    

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
        h1.textContent = response.data[i].title
        document.body.appendChild(h1)
        h2.textContent = response.data[i].description
        document.body.appendChild(h2)
        h3.textContent = `Assigned to: ${response.data[i].price} `  
        document.body.appendChild(h3)
        h4.textContent = `Id: ${response.data[i]._id}`
        document.body.appendChild(h4) 
        box.type="checkbox"
        document.body.appendChild(box)
        
      
 }
})   


//post

    //            axios.get("https://rickandmortyapi.com/api/character")   
    //     .then(response=>{
    //         console.log(response)
    //        const people= response.data.results
    //        const pick = people[Math.floor(Math.random() * people.length)];
    //        const ul = document.createElement('ul')
    //       ul.textContent = pick.name
    //        document.body.appendChild(ul) 
    //   }) 

     axios.get("https://rickandmortyapi.com/api/character/1")   
        .then(response=>{
        console.log(response)
        const people= response.data.results
        const pick = people[Math.floor(Math.random() * people.length)];
  
      })
 
 
 


    const todoForm = document.todoform
    todoForm.addEventListener("submit", function(event){
    event.preventDefault()
    let inputTodo = {
        title: todoForm.title.value,
        description: wtev.name,
        price: pick.name ,
        imgUrl: todoForm.imgUrl.value
    }
    axios.post("https://api.vschool.io/[james_lar]/todo", inputTodo)
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

const button = document.getElementById('delete-button')
button.addEventListener("click",function(){
    let todoId = todoForm.todoId.value
    axios.delete(`https://api.vschool.io/[james_lar]/todo/${todoId}`)
})

 

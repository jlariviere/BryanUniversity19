const deleteTaskButton = document.getElementById("deleteTaskButton")
const taskInput = document.getElementById("newTask")
const incompleteTasks = document.getElementById("toDo");
const addTaskButton = document.getElementById("addTaskButton")
 addTask = ()=> {
    let text = taskInput.value;
    let li = document.createElement("li") 
    const button = document.createElement("button")
    button.textContent = "Delete"
    button.id = "deleteTaskButton"

    li.textContent = text;
    incompleteTasks.appendChild(li);
    li.appendChild(button);   
 }
 clr = ()=>{ 
     taskInput.value=" ";
 }

 remove = ()=>{
        //  let del = document.getElementsById("deleteTaskButton")
        // del.parentNode.removeChild(del);
    incompleteTasks.firstChild.remove();
   
 }

deleteTaskButton.addEventListener("click",remove)
addTaskButton.addEventListener("click",addTask) 
addTaskButton.addEventListener("click",clr)
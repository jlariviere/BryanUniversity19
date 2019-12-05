const deleteTaskButton = document.getElementById("deleteTaskButton")
const itemInput = document.getElementById("item")
const descriptionInput = document.getElementById("description")
const incompleteTasks = document.getElementById("toDo");
const addTaskButton = document.getElementById("addTaskButton")
addTask = () => {
    let text = itemInput.value + ":  " + descriptionInput.value + " "
    let li = document.createElement("li")
    let button = document.createElement("button")
    incompleteTasks.appendChild(li);
    li.textContent = text;
    button.textContent = "Delete";
    li.appendChild(button);

    itemInput.value = " ";
    descriptionInput.value = " ";

    button.addEventListener("click", (e) => {
        e.preventDefault()
        incompleteTasks.removeChild(li)
    })
}

addTaskButton.addEventListener("click", addTask)


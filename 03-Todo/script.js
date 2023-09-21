

const taskInput = document.getElementById("task-input")
const addTaskBtn = document.getElementById("add-task-btn")
const taskList = document.getElementById('task-list')

let taskItem;

function addTask() {
    const taskText = taskInput.value.trim()


    if(taskText !== "") {
        taskItem = document.createElement("li")
        taskItem.innerHTML = `<span>${taskText}</span>
        <butto class="delete-btn" >Eliminar</butto>
        `


        const deleteBtn  = taskItem.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteTask)
        taskList.appendChild(taskItem)
        taskInput.value = ""
    }
}


function toggleComplete () {
    this.classList.toggle("complete")
}


function deleteTask() {
    this.parentElement.remove();
}

addTaskBtn.addEventListener("click", addTask)


taskInput.addEventListener("keypress", function (e){
    if (e.key === "Enter") {
        addTask()
    }
})

taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.classList.toggle("complete")
    }
})


taskList.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")){
        e.target.parentElement.remove()
    }
})
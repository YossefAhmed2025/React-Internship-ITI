let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


// READ
function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <span class="task-text ${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div class="actions">
                <button class="edit" onclick="editTask(${index})">
                    Edit
                </button>

                <button class="delete" onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        li.querySelector(".task-text").onclick = function () {
            toggleTask(index);
        };

        taskList.appendChild(li);
    });
}


// CREATE
function addTask() {

    let text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    let task = {
        text: text,
        completed: false
    };

    tasks.push(task);

    saveTasks();

    taskInput.value = "";

    displayTasks();
}


// UPDATE
function editTask(index) {

    let newText = prompt("Edit your task:", tasks[index].text);

    if (newText !== null && newText.trim() !== "") {

        tasks[index].text = newText.trim();

        saveTasks();

        displayTasks();
    }
}


// UPDATE - Completed
function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();

    displayTasks();
}


// DELETE
function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();

    displayTasks();
}


// LocalStorage
function saveTasks() {

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Add Button
addBtn.addEventListener("click", addTask);


// Enter Key
taskInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        addTask();
    }

});


// Display saved tasks
displayTasks();
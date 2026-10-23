
let tasks = [];

let savedTasks = localStorage.getItem("tasks");

if (savedTasks !== null) {
    tasks = JSON.parse(savedTasks);
}

function addTask() {
    const input = document.getElementById("task");
    let task = input.value.trim();

    if (task === "") return;

    tasks.push(task);
    saveTasks();
    renderTask();

    input.value = "";
}
/////////////////////////////////////////////////
function saveTasks() {
    let tasksString = JSON.stringify(tasks);
    localStorage.setItem("tasks", tasksString);
}
//////////////////////////////////////////////////
function renderTask() {
    const list = document.getElementById("tasklist");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function () {
            removeTask(index);
        };

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}
////////////////////////////////////////////////
function removeTask(index) {
    tasks.splice(index, 1);

    saveTasks();
    renderTask();
}

renderTask();

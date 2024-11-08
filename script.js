const formClass = document.getElementById('new-task-form');

function closeForm() {
    formClass.classList.add('hidden');
};

function openForm() {
    formClass.classList.remove('hidden');
};

function addNewTask() {
    document.getElementById('add-task-btn').addEventListener('click', function () {
        const taskTitle = document.getElementById('task-title').value.trim();
        const taskDesc = document.getElementById('task-desc').value.trim();

        if (taskTitle === "" || taskDesc === "") {
            alert("Please enter both task title and description.");
            return;
        }

        const taskList = document.querySelector('.task-list');
        const newTaskItem = document.createElement('li');

        newTaskItem.innerHTML = `
            <input type="checkbox">
            <span class="task-title">${taskTitle}</span>
        `;

        taskList.appendChild(newTaskItem);
        formClass.classList.add('hidden');

        document.getElementById('task-title').value = '';
        document.getElementById('task-desc').value = '';
    });
}

document.addEventListener('DOMContentLoaded', function () {
    addNewTask();
});
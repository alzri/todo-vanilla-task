const formClass = document.getElementById('new-task-form');

function closeForm() {
    formClass.classList.add('hidden');
};

function openForm() {
    formClass.classList.remove('hidden');
};

function addNewTask() {
    const addTaskButton = document.getElementById('add-task-btn');
    const taskTitleInput = document.getElementById('task-title');
    const taskDescInput = document.getElementById('task-desc');
    const taskList = document.querySelector('.task-list.all-list');

    if (!addTaskButton.dataset.listenerAdded) {
        addTaskButton.addEventListener('click', function () {
            const taskTitle = taskTitleInput.value.trim();

            if (taskTitle === "") {
                alert("Please enter both task title and description.");
                return;
            }

            const newTaskItem = document.createElement('li');
            newTaskItem.innerHTML = `
                <input type="checkbox">
                <span class="task-title">${taskTitle}</span>
            `;

            taskList.appendChild(newTaskItem);

            formClass.classList.add('hidden');
            taskTitleInput.value = '';
            taskDescInput.value = '';
        });

        addTaskButton.dataset.listenerAdded = 'true';
    }
}

document.addEventListener('DOMContentLoaded', function () {
    addNewTask();
});

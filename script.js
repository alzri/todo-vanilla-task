const formClass = document.getElementById('new-task-form');
const editForm = document.getElementById('edit-task-form');
let currentTaskItem = null;

function fetchFromLocalStorage() {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => addNewTask(task));
}

function saveToLocalStorage() {
    const tasks = [];
    document.querySelectorAll('.task-item').forEach(taskItem => {
        const taskTitle = taskItem.querySelector('.task-title').innerText;
        const taskStatus = taskItem.classList.contains('to-do') 
            ? 'to-do' 
            : taskItem.classList.contains('in-progress')
            ? 'in-progress'
            : 'done';

        tasks.push({ title: taskTitle, status: taskStatus });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function openForm() {
    formClass.classList.remove('hidden');
}

function closeForm() {
    formClass.classList.add('hidden');
}

function addNewTask(task = null) {
    const addTaskButton = document.getElementById('add-task-btn');
    const taskTitleInput = document.getElementById('task-title');
    const taskList = document.querySelector('.task-list.all-list');

    if (!addTaskButton.dataset.listenerAdded) {
        addTaskButton.addEventListener('click', function () {
            const taskTitle = taskTitleInput.value.trim();

            if (taskTitle === "") {
                alert("Brate, zaboravio si naslov taska!");
                return;
            }

            const newTaskItem = document.createElement('li');
            newTaskItem.classList.add('task-item', 'to-do');
            newTaskItem.innerHTML = `
                <span class="task-title">${taskTitle}</span>
                <div class="task-option-button">
                    <button class="edit-button">Edit task</button>
                    <select class="status-dropdown">
                        <option value="to-do">To Do</option>
                        <option value="in-progress">In Progress</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            `;

            newTaskItem.querySelector('.edit-button').addEventListener('click', function () {
                editTask(newTaskItem);
            });
            newTaskItem.querySelector('.status-dropdown').addEventListener('change', taskUpdate);

            taskList.appendChild(newTaskItem);
            saveToLocalStorage();
            closeForm();
            taskTitleInput.value = '';
        });

        addTaskButton.dataset.listenerAdded = 'true';
    }

    if (task) {
        const newTaskItem = document.createElement('li');
        newTaskItem.classList.add('task-item', task.status);
        newTaskItem.innerHTML = `
            <span class="task-title">${task.title}</span>
            <div class="task-option-button">
                <button class="edit-button">Edit task</button>
                <select class="status-dropdown">
                    <option value="to-do" ${task.status === 'to-do' ? 'selected' : ''}>To Do</option>
                    <option value="in-progress" ${task.status === 'in-progress' ? 'selected' : ''}>In Progress</option>
                    <option value="done" ${task.status === 'done' ? 'selected' : ''}>Done</option>
                </select>
            </div>
        `;
        
        newTaskItem.querySelector('.edit-button').addEventListener('click', function () {
            editTask(newTaskItem);
        });
        newTaskItem.querySelector('.status-dropdown').addEventListener('change', taskUpdate);

        const listMap = {
            'to-do': document.getElementById('all-list'),
            'in-progress': document.getElementById('progress-list'),
            'done': document.getElementById('done-list')
        };

        listMap[task.status].appendChild(newTaskItem);
    }
}

function taskUpdate(e) {
    const dropdown = e.target;
    const newStatus = dropdown.value;
    const taskItem = dropdown.closest('li');
    const listMap = {
        'to-do': document.getElementById('all-list'),
        'in-progress': document.getElementById('progress-list'),
        'done': document.getElementById('done-list')
    };

    taskItem.classList.remove('to-do', 'in-progress', 'done');
    taskItem.classList.add(newStatus);
    listMap[newStatus].appendChild(taskItem);

    saveToLocalStorage();
}

function editTask(taskItem) {
    currentTaskItem = taskItem;

    const taskTitle = taskItem.querySelector('.task-title').innerText;
    document.getElementById('edit-task-title').value = taskTitle;

    editForm.classList.remove('hidden');
}

function closeEditForm() {
    editForm.classList.add('hidden');
    currentTaskItem = null;
}

document.getElementById('save-task-btn').addEventListener('click', function () {
    if (currentTaskItem) {
        const newTitle = document.getElementById('edit-task-title').value.trim();
        if (newTitle === "") {
            alert("Task title cannot be empty!");
            return;
        }

        currentTaskItem.querySelector('.task-title').innerText = newTitle;
        saveToLocalStorage();
        closeEditForm();
    }
});

function deleteTask() {
    if (currentTaskItem) {
        currentTaskItem.remove();
        saveToLocalStorage();
        closeEditForm();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    fetchFromLocalStorage();
    addNewTask();
});
